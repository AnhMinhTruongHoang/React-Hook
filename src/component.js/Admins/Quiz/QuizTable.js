import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../Service/apiServices";
import { deleteQuizForAdmin } from "../../../Service/apiServices";

// const ModelDeleteUser = (props) => {
//   const { show, setShow, dataDelete } = props;
// }
//   const handleClose = () => setShow(false);

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

  const HanderDeleteQuiz = () => {
    alert("ok");
  };

  // const HanderDeleteQuiz = async () => {
  //   let data = await DeleteUser(dataDelete.id);
  //   console.log("conponent res", data);
  //   if (data && data.EC === 0) {
  //     toast.success(data.EM);
  //     handleClose();
  //     await props.fetchListUser();
  //     props.setcurrentPage(1);
  //     await props.fetchListUserwithPageinate(1);
  //   }
  //   if (data && data.EC !== 0) {
  //     toast.error(data.EM);
  //   }
  // }; 

  return (
    <>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          color: "yellowgreen",
        }}
      >
        <b>list Quiz</b>
      </div>
      <table className="table table-hover table-bordered mt-2 my-2">
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
                  <td style={{ display: "flex", gap: "15px" }}>
                    <button className="btn btn-warning "> Edit </button>
                    <button
                      className="btn btn-danger  "
                      onClick={() => HanderDeleteQuiz()}
                    >
                      {" "}
                      Delete{" "}
                    </button>
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
