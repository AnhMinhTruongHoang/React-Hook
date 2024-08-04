import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../Service/apiServices";
import _ from "lodash";
import "./Quiz.scss";
import Question from "./Questions";

// Định nghĩa component DetailQuiz
const DetailQuiz = (props) => {
  // Sử dụng hook useParams để lấy tham số từ URL
  const params = useParams();
  const quizId = params.id; // Lấy giá trị của tham số id từ URL
  const location = useLocation();
  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  // Sử dụng hook useEffect để thực hiện một số hành động khi component được render hoặc khi quizId thay đổi

  useEffect(() => {
    fetchQuestions(); // Gọi hàm fetchQuestions khi component được render hoặc quizId thay đổi
  }, [quizId]); // Mảng phụ thuộc bao gồm quizId

  // Định nghĩa hàm fetchQuestions để lấy dữ liệu câu hỏi từ API
  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId); // Gọi hàm getDataQuiz từ apiServices với tham số quizId
    console.log("check Questions:", res); // In ra console kết quả trả về từ API
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;

          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            answers.push(item.answers);
          });

          return { questionId: key, answers, questionDescription, image };
        })

        .value();
      console.log(data);
      setDataQuiz(data);
    }
  };

  console.log("check data quiz", dataQuiz);

  const handlePrev = () => {
    if (index - 1 < 0) return;
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
  };

  // JSX để render giao diện của component
  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title"></div>
        {location?.state?.quizTitle}
        <hr style={{ color: "red" }} />
        <div className="q-body">
          <img />
        </div>
        <div className="q-content">
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
          />
        </div>
        <div className="footer">
          <button className="btn btn-secondary" onClick={() => handlePrev()}>
            Prev
          </button>
          <button className="btn btn-primary " onClick={() => handleNext()}>
            Next
          </button>
        </div>
      </div>

      <div className="right-content">count down</div>
    </div>
  );
};

// Xuất component DetailQuiz để sử dụng ở nơi khác
export default DetailQuiz;
