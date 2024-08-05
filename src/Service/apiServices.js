import axios from "../unity/AxioCustomize"; // Nhập thư viện axios để sử dụng cho các yêu cầu HTTP

// Định nghĩa hàm postCreateUser với các tham số: email, password, username, role, image
const postCreateUser = (email, password, username, role, image) => {
  // Tạo một đối tượng FormData để chứa các dữ liệu cần gửi
  const data = new FormData();
  data.append("email", email); // Thêm email vào FormData
  data.append("password", password); // Thêm mật khẩu vào FormData
  data.append("username", username); // Thêm tên người dùng vào FormData
  data.append("role", role); // Thêm vai trò vào FormData
  data.append("userimage", image); // Thêm hình ảnh người dùng vào FormData

  // Gửi yêu cầu POST tới URL "http://localhost:8081/api/v1/participant" với dữ liệu trong FormData
  return axios.post("/api/v1/participant", data);
};
const postRegister = (email, password, username) => {
  // Tạo một đối tượng FormData để chứa các dữ liệu cần gửi
  const data = new FormData();
  data.append("email", email); // Thêm email vào FormData
  data.append("password", password); // Thêm mật khẩu vào FormData
  data.append("username", username); // Thêm tên người dùng vào FormData

  // Gửi yêu cầu POST tới URL "http://localhost:8081/api/v1/participant" với dữ liệu trong FormData
  return axios.post("http://localhost:8081/api/v1/register", data);
};

const getAllUser = () => {
  return axios.get("/api/v1/participant/all"); /// truyen data den TableUser.js
};

const postViewUser = (email, password, username, role, image) => {
  // Tạo một đối tượng FormData để chứa các dữ liệu cần gửi
  const data = new FormData();
  data.append("email", email); // Thêm email vào FormData
  data.append("password", password); // Thêm mật khẩu vào FormData
  data.append("username", username); // Thêm tên người dùng vào FormData
  data.append("role", role); // Thêm vai trò vào FormData
  data.append("userimage", image); // Thêm hình ảnh người dùng vào FormData

  // Gửi yêu cầu POST tới URL "http://localhost:8081/api/v1/participant" với dữ liệu trong FormData
  return axios.post("/api/v1/participant", data);
};

const putUpdateUser = (username, role, image, email, id) => {
  const data = new FormData();
  data.append("id", id);
  data.append("email", email);
  data.append("username", username); // Ensure 'username' matches the backend field
  data.append("role", role);
  data.append("userimage", image);

  return axios.put("/api/v1/participant", data);
};

const DeleteUser = (userId) => {
  return axios.delete("/api/v1/participant", { data: { id: userId } }); /// truyen data den TableUser.js
};

const getUserWithPage = (page, limit) => {
  return axios.get(
    `http://localhost:8081/api/v1/participant?page= ${page}&limit=${limit}`
  ); /// truyen data den TableUser.js
};

const postLogin = (email, password) => {
  return axios.post(`/api/v1/login`, { email, password, delay: 5000 });
};

const getQuizByUser = () => {
  return axios.get("/api/v1/quiz-by-participant");
};

const logout = (email, refresh_token) => {
  return axios.post("/api/v1/logout", { email, refresh_token });
};

const getDataQuiz = (id) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`); // goi api lay data bai quiz bang id bai'
};

const postSubmitQuiz = (data) => {
  return axios.post(`/api/v1/quiz-submit`, { ...data });
};

const postCreateNewQuiz = (description,name,difficulty,quizImage) => {
  const data = new FormData();
  data.append("description", description);
  data.append("name", name); // Ensure 'username' matches the backend field
  data.append("difficulty", difficulty);
  data.append("quizImage", quizImage);
  return axios.post("/api/v1/quiz", data);

}

const getAllQuizForAdmin = () => {
  return axios.get(`/api/v1/quiz/all`); // goi api lay data ALL bai quiz bang id bai'
};


export {
  postCreateNewQuiz,
  getAllQuizForAdmin,
  postCreateUser,
  getAllUser,
  postViewUser,
  DeleteUser,
  putUpdateUser,
  getUserWithPage,
  postLogin,
  postRegister,
  getQuizByUser,
  logout,
  getDataQuiz,
  postSubmitQuiz,
}; // Xuất hàm postCreateUser để có thể sử dụng ở nơi khác
