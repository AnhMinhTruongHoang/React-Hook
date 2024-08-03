import { useEffect, useState } from "react"; // Import các hooks từ React
import { getQuizByUser } from "../../Service/apiServices"; // Import hàm lấy dữ liệu quiz từ dịch vụ API
import "../Users/Quiz.scss"; // Import file SCSS để sử dụng cho style
import { useNavigate } from "react-router-dom"; // Import hook useNavigate để điều hướng

const ListQuiz = (props) => {
  const [arrQuiz, setArrQuiz] = useState([]); // Khai báo state arrQuiz để lưu trữ danh sách quiz
  const navigate = useNavigate(); // Khai báo hook useNavigate để điều hướng

  // Sử dụng useEffect để gọi hàm lấy dữ liệu khi component được mount
  useEffect(() => {
    getQuizData();
  }, []); // Mảng phụ thuộc rỗng để chỉ gọi khi component được render lần đầu

  // Hàm lấy dữ liệu quiz từ API
  const getQuizData = async () => {
    const res = await getQuizByUser(); // Gọi API lấy danh sách quiz
    console.log("res:", res); // In ra kết quả nhận được từ API
    if (res && res.EC === 0) {
      // Kiểm tra nếu kết quả trả về thành công
      setArrQuiz(res.DT); // Cập nhật state arrQuiz với dữ liệu nhận được
    }
  };

  ////////
  return (
    <div className="list-quiz-container container">
      {arrQuiz &&
        arrQuiz.length > 0 && // Kiểm tra nếu arrQuiz có dữ liệu
        arrQuiz.map((quiz, index) => {
          // Duyệt qua từng quiz trong arrQuiz
          return (
            <div
              key={`${index}-quiz`} // Đặt key duy nhất cho mỗi phần tử
              className="card"
              style={{ width: "18rem" }} // Đặt chiều rộng cho card
            >
              <img
                src={`data:image/jpeg;base64,${quiz.image}`}
                className="card-img-top"
                alt="..."
              />
              {/* // Hiển thị hình ảnh quiz */}
              <div className="card-body">
                <h5 className="card-title"> Quiz {index + 1}</h5>
                {/* //   Hiển thị tiêu đề quiz */}
                <p className="card-text">{quiz.description}</p>
                {/* // Hiển thị mô tả quiz */}
                <button  // nut bat dau
                  onClick={() =>
                    navigate(`/quiz/${quiz.id}`, {
                      state: { quizTitle: quiz.description },
                    })
                  }
                  className="btn btn-primary"
                >
                  Start Now 
                </button>
              </div>
            </div>
          );
        })}
      {
        arrQuiz &&
          arrQuiz.length === 0 && ( // Kiểm tra nếu arrQuiz không có dữ liệu
            <img
              src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png"
              alt="You don't have any quiz now ...."
              style={{
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                margin: "auto",
                width: "100%",
              }}
            />
          )
        // Hiển thị hình ảnh thông báo không có quiz
      }
    </div>
  );
};

export default ListQuiz; // Xuất component ListQuiz
