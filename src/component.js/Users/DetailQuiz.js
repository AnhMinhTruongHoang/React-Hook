import { useEffect, useState } from "react"; // Import các hook useEffect và useState từ React
import { useParams, useLocation } from "react-router-dom"; // Import các hook useParams và useLocation từ react-router-dom
import { getDataQuiz } from "../../Service/apiServices"; // Import hàm getDataQuiz từ dịch vụ API
import _ from "lodash"; // Import thư viện lodash
import "./Quiz.scss"; // Import file CSS để áp dụng style
import Question from "./Questions"; // Import component Question

// Định nghĩa component DetailQuiz
const DetailQuiz = (props) => {
  // Sử dụng hook useParams để lấy tham số từ URL
  const params = useParams();
  const quizId = params.id; // Lấy giá trị của tham số id từ URL
  const location = useLocation(); // Sử dụng hook useLocation để lấy thông tin về vị trí hiện tại
  const [dataQuiz, setDataQuiz] = useState([]); // Khai báo state để lưu trữ dữ liệu câu hỏi
  const [index, setIndex] = useState(0); // Khai báo state để lưu trữ chỉ số câu hỏi hiện tại

  // Sử dụng hook useEffect để thực hiện một số hành động khi component được render hoặc khi quizId thay đổi
  useEffect(() => {
    fetchQuestions(); // Gọi hàm fetchQuestions khi component được render hoặc quizId thay đổi
  },[quizId]); // Mảng phụ thuộc bao gồm quizId

  // Định nghĩa hàm fetchQuestions để lấy dữ liệu câu hỏi từ API
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId); // Gọi hàm getDataQuiz từ apiServices với tham số quizId
    console.log("check Questions:", res); // In ra console kết quả trả về từ API
    if (res && res.EC === 0) {
      // Kiểm tra nếu kết quả trả về thành công
      let raw = res.DT; // Lấy dữ liệu thô từ kết quả trả về
      let data = _.chain(raw)
        // Nhóm các phần tử của mảng dựa trên thuộc tính `id`
        .groupBy("id")
        // `key` là tên của nhóm (màu sắc), `value` là mảng các đối tượng
        .map((value, key) => {
          let answers = []; // Khởi tạo mảng câu trả lời
          let questionDescription,
            image = null; // Khởi tạo các biến để lưu trữ mô tả câu hỏi và ảnh

          value.forEach((item, index) => {
            // Lặp qua từng phần tử trong mảng
            if (index === 0) {
              // Lấy mô tả câu hỏi và ảnh từ phần tử đầu tiên
              questionDescription = item.description;
              image = item.image;
            }
            item.answers.isSelected = false
            answers.push(item.answers); // Thêm câu trả lời vào mảng câu trả lời
          });

          // Trả về đối tượng chứa id câu hỏi, câu trả lời, mô tả câu hỏi và ảnh
          return { questionId: key, answers, questionDescription, image };
        })
        .value(); // Kết thúc chuỗi xử lý và trả về mảng dữ liệu
      console.log(data); // In ra console mảng dữ liệu đã xử lý
      setDataQuiz(data); // Cập nhật state dataQuiz với mảng dữ liệu đã xử lý
    }
  };

  console.log("check data quiz", dataQuiz); // In ra console dữ liệu câu hỏi

  // Định nghĩa hàm handlePrev để xử lý khi nhấn nút Prev
  const handlePrev = () => {
    if (index - 1 < 0) return; // Nếu chỉ số câu hỏi hiện tại là 0 thì không làm gì cả
    setIndex(index - 1); // Giảm chỉ số câu hỏi hiện tại đi 1
  };

  const handleCheckBox2 = (answersId, questionId) => {
      let dataQuizClone = _.cloneDeep(dataQuiz)
      let question = dataQuizClone.find(item => +item.questionId === +questionId)
      if(question && question.answers){
        question.answers = question.answers.map(item =>{
          if(+item.id === +answersId){
              item.isSelected = !item.isSelected;
          }
          return item;
        
        })
       
      }
      let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
      if(index > -1){
        dataQuizClone[index] = question;
        setDataQuiz(dataQuizClone);
      }
      
    }

  // Định nghĩa hàm handleNext để xử lý khi nhấn nút Next
  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1); // Tăng chỉ số câu hỏi hiện tại lên 1 nếu chưa đến câu hỏi cuối cùng
  };

  // JSX để render giao diện của component
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title"></div>
        {location?.state?.quizTitle} {/* Hiển thị tiêu đề của bài quiz */}
        <hr style={{ color: "red" }} />
        <div className="q-body">
          <img  /> {/* Hiển thị ảnh */}
        </div>
        <div className="q-content">
          <Question
            handleCheckBox2={handleCheckBox2}
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []} // Truyền dữ liệu câu hỏi vào component Question
          />
        </div>
        <div className="footer">
          <button className="btn btn-secondary" onClick={() => handlePrev()}>
            Prev {/* Nút Prev để chuyển về câu hỏi trước */}
          </button>
          <button className="btn btn-primary " onClick={() => handleNext()}>
            Next {/* Nút Next để chuyển đến câu hỏi tiếp theo */}
          </button>
          <button className="btn btn-warning " onClick={() => handleNext()}>
            Finish {/* Nút Next để chuyển đến câu hỏi tiếp theo */}
          </button>
        </div>
      </div>
      <div className="right-content">count down</div>{" "}
      {/* Hiển thị phần đếm ngược */}
    </div>
  );
};

// Xuất component DetailQuiz để sử dụng ở nơi khác
export default DetailQuiz;
