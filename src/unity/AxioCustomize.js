import axios from "axios"; // Nhập thư viện axios để sử dụng cho các yêu cầu HTTP
import nProgress from "nprogress"; /// them thu vien thanh loading ngang


  nProgress.configure({ //  css NProgress
  showSpinner: false,
  // easing: 'ease',
  // speed: 500,
  // trickleRate: 0.5,
  // easing: 'ease',
  // speed: 200,
  // trickle: true,
  // trickleRate: 0.02,
  trickleSpeed: 100,
});



// Tạo một instance của axios với các thiết lập cấu hình
const instance = axios.create({
  baseURL: "http://localhost:8081/", // Thiết lập URL gốc cho tất cả các yêu cầu HTTP
  // timeout: 1000, // Đặt thời gian chờ (timeout) cho yêu cầu HTTP là 1000ms (tùy chọn)
  // headers: {'X-Custom-Header': 'foobar'} // Thiết lập các header tùy chỉnh cho yêu cầu HTTP (tùy chọn)
});

// Thêm một interceptor cho các yêu cầu
instance.interceptors.request.use(
  function (config) {
    nProgress.start(); //loading
    // Làm gì đó trước khi yêu cầu được gửi đi
    return config; // Trả về cấu hình yêu cầu để tiếp tục gửi yêu cầu
  },
  function (error) {
    // Làm gì đó với lỗi của yêu cầu
    return Promise.reject(error); // Trả về một Promise bị từ chối với lỗi
  }
);

// Thêm một interceptor cho các phản hồi
instance.interceptors.response.use(
  function (response) {
    nProgress.done(); // loading
    // Bất kỳ mã trạng thái nào nằm trong phạm vi 2xx sẽ kích hoạt hàm này
    // Làm gì đó với dữ liệu phản hồi
    return response && response.data ? response.data : response; // Trả về phản hồi để tiếp tục xử lý phản hồi
  },
  function (error) {
    // Bất kỳ mã trạng thái nào nằm ngoài phạm vi 2xx sẽ kích hoạt hàm này
    // Làm gì đó với lỗi của phản hồi
    console.log(">>> run error", error.response);
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error); // Trả về một Promise bị từ chối với lỗi
  }
);

export default instance; // Xuất instance để có thể sử dụng ở nơi khác
