import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../Service/apiServices";

// Định nghĩa component DetailQuiz
const DetailQuiz = (props) => {
    
    // Sử dụng hook useParams để lấy tham số từ URL
    const params = useParams();
    const quizId = params.id; // Lấy giá trị của tham số id từ URL

    // Sử dụng hook useEffect để thực hiện một số hành động khi component được render hoặc khi quizId thay đổi
    useEffect(() => {
        fetchQuestions() // Gọi hàm fetchQuestions khi component được render hoặc quizId thay đổi
    }, [quizId]); // Mảng phụ thuộc bao gồm quizId

    // Định nghĩa hàm fetchQuestions để lấy dữ liệu câu hỏi từ API
    const fetchQuestions = async() => {
        let res = await getDataQuiz(quizId) // Gọi hàm getDataQuiz từ apiServices với tham số quizId
        console.log('check Questions:' ,res) // In ra console kết quả trả về từ API

    }

    // JSX để render giao diện của component
    return(
        <div className="detail-quiz-container">
            sadasdasda
        </div>
    )
}

// Xuất component DetailQuiz để sử dụng ở nơi khác
export default DetailQuiz;
