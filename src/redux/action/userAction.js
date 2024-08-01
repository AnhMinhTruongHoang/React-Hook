export const FETCH_USER_LOGiN_SUCCESS = "FETCH_USER_LOGiN_SUCCESS";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

// Hàm doLogin nhận tham số data và trả về một đối tượng hành động (action object)
export const doLogin = (data) => {
  return {
    type: FETCH_USER_LOGiN_SUCCESS, // Đây là loại hành động, xác định loại sự kiện đang xảy ra
    payload: data, // Dữ liệu được đính kèm với hành động, thường là thông tin người dùng đăng nhập thành công
  };
};

export const doLogout = () => {
  return {
    type: USER_LOGOUT_SUCCESS, // Đây là loại hành động, xác định loại sự kiện đang xảy ra
  };
};

// Giải thích chi tiết:
// FETCH_USER_LOGiN_SUCCESS:

// Đây là một hằng số (constant) được khai báo và xuất ra (export) để sử dụng ở các nơi khác trong ứng dụng. Nó đại diện cho một loại hành động (action type) cụ thể, trong trường hợp này là hành động khi người dùng đăng nhập thành công.
// doLogin:

// Đây là một hàm (function) nhận một tham số là data.
// Hàm này trả về một đối tượng hành động (action object) có hai thuộc tính:
// type: Loại hành động, ở đây là FETCH_USER_LOGiN_SUCCESS.
// payload: Dữ liệu được đính kèm với hành động, là thông tin về người dùng đã đăng nhập thành công (được truyền vào thông qua tham số data).
// Lưu ý:
// Đoạn mã này thường được sử dụng trong Redux, một thư viện quản lý trạng thái (state) phổ biến trong các ứng dụng React.
// doLogin là một action creator, được sử dụng để tạo ra các hành động (actions) giúp thay đổi trạng thái của ứng dụng khi người dùng thực hiện đăng nhập thành công.
