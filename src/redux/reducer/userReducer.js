import { INCREMENT, DECREMENT } from "../action/counterAction";
import { FETCH_USER_LOGiN_SUCCESS } from "../action/userAction";

const INITIAL_STATE = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    role: "",
  },
  isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {  // truyen data user cho redux
  switch (action.type) {
    case FETCH_USER_LOGiN_SUCCESS:
      console.log("check", action);
      return {
        ...state,
        account: {
          access_token: action?.payload?.DT?.access_token,
          refresh_token: action?.payload?.DT?.refresh_token,
          username: action?.payload?.DT?.username,
          image: action?.payload?.DT?.image,
          role: action?.payload?.DT?.role,
        },
        isAuthenticated: true,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default userReducer;

// Giải thích chi tiết:
// import { TRUE } from "sass";:

// Dòng này không cần thiết vì TRUE từ sass không được sử dụng trong đoạn mã này và có thể gây lỗi. Bạn có thể xóa dòng này.
// import { INCREMENT, DECREMENT } from "../action/counterAction";:

// Dòng này nhập hai hằng số INCREMENT và DECREMENT từ tệp counterAction. Tuy nhiên, trong đoạn mã hiện tại, chỉ có DECREMENT được sử dụng.
// INITIAL_STATE:

// Đây là trạng thái ban đầu (initial state) của reducer. Nó chứa thông tin về tài khoản và trạng thái xác thực của người dùng.
// userReducer:

// Đây là một hàm reducer nhận hai tham số: state (trạng thái hiện tại) và action (hành động). Nếu state không được cung cấp, nó sẽ sử dụng INITIAL_STATE làm giá trị mặc định.
// Bên trong hàm này, có một câu lệnh switch để kiểm tra loại hành động (action type).
// case "FETCH_USER_LOGiN_SUCCESS":

// Nếu hành động là FETCH_USER_LOGiN_SUCCESS, nó sẽ cập nhật trạng thái với thông tin tài khoản từ action.payload.DT và đặt isAuthenticated thành true.
// case DECREMENT:

// Nếu hành động là DECREMENT, nó sẽ giảm giá trị count trong trạng thái hiện tại đi 1. Tuy nhiên, đoạn mã này không khởi tạo giá trị count trong INITIAL_STATE, nên có thể gây ra lỗi nếu không thêm giá trị mặc định cho count.
// default:

// Nếu không có hành động nào khớp, reducer sẽ trả về trạng thái hiện tại mà không thay đổi gì.
// export default userReducer:

// Cuối cùng, hàm userReducer được xuất ra (export) để sử dụng ở các nơi khác trong ứng dụng.
// Lưu ý:
// Đoạn mã này thường được sử dụng trong Redux để quản lý trạng thái (state) của ứng dụng React.
// Hãy đảm bảo rằng count được khởi tạo trong INITIAL_STATE nếu bạn định sử dụng hành động DECREMENT.