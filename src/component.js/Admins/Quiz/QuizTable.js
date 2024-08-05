import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../Service/apiServices";


const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
    console.log("res D", res);
  };

  return (
   <>
    <div style={{alignItems: 'center', textAlign: 'center', color: 'yellowgreen'}}><b>list Quiz</b></div>
        <table className="table table-hover table-bordered mt-2">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listQuiz &&
              listQuiz.map((item, index) => {
                return (
                  <tr key={`table-quiz-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.difficulty}</td>
                    <td style={{display: 'flex', gap: '15px'}}>
                      <button className="btn btn-warning "> Edit </button>
                      <button className="btn btn-danger  "> Delete </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
   </>
  );
};

export default TableQuiz;
