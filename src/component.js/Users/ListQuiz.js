import { useEffect, useState } from "react";
import { getQuizByUser } from "../../Service/apiServices";
import "../Users/Quiz.scss"

const ListQuiz = (props) => {
  const [arrQuiz, setArrQuiz] = useState([]);

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async() => {
    const res = await getQuizByUser();
    console.log('res:', res)
    if (res && res.EC === 0) {
      setArrQuiz(res.DT);
    }
  };

  ////////
  return (
    <div className="list-quiz-container container">
      {arrQuiz &&  (arrQuiz.length > 0) &&
        arrQuiz.map((quiz, index) => {
          return (
            <div
              key={`${index}-quiz`}
              className="card"
              style={{ width: "18rem" }}
            >
              <img src={`data:image/jpeg;base64,${quiz.image}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"> Quiz {index + 1}</h5>
                <p className="card-text">{quiz.description}</p>
                <button href="#" className="btn btn-primary">
                  Start Now
                </button>
              </div>
            </div>
          );
        })}
        {arrQuiz && arrQuiz.length === 0 &&
          <img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" alt="You don't have any quiz now ...."  style={{display: 'block', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: 'auto', width: '100%'}}/> 

          
        }
    </div>
  );
};

export default ListQuiz;
