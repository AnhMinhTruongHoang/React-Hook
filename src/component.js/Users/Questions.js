import _ from "lodash"; // Import thư viện lodash để sử dụng các hàm tiện ích
import TFT from "../../assets/TFT_Fates_Header_SEO.jpg"; // Import file video từ thư mục assets


const Question = (props) => {
  const { data, index } = props; // Lấy dữ liệu và index từ props
  if (_.isEmpty(data)) {
    // Kiểm tra nếu data rỗng
    return <></>; // Trả về một phần tử rỗng nếu data rỗng
  }

  const handleCheckBox = (event, aID,qId) => {
    // console.log("check", event.target.checked);
    console.log('>>> data props', aID, qId)
    props.handleCheckBox2(aID,qId)
  };

  return (
    <>
      {data.image ? ( // Kiểm tra nếu có ảnh trong data
        <div className="q-image">
          <img src={`data:image/jpeg;base64,${data.image}`} alt={TFT} />
        </div>
      ) : (
        <div className="q-image">
          <img src={TFT} alt="ok" />
        </div>
      )}

      <div className="question">
        Câu hỏi {index + 1}: {data.questionDescription} ?
      </div>

      <div className="answer">
        {data.answers && // Kiểm tra nếu có câu trả lời trong data
          data.answers.length && // Kiểm tra nếu mảng câu trả lời không rỗng
          data.answers.map((a, index) => {
            // Lặp qua mỗi câu trả lời trong mảng
            return (
              <div key={`answer-${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={a.isSelected}
                    onChange={(event) => handleCheckBox(event,a.id,data.questionId)}
                  />

                  <label className="form-check-label">{a.description}</label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question; // Xuất component Question để có thể sử dụng ở nơi khác
