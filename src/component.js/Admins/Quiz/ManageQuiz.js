import { useState } from "react";
import "../Quiz/ManageQuiz.scss";
import Select from "react-select";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];

const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EASY");
  const [image, setImage] = useState(null);

  const HandlerImage = (event) =>{

  }

  return (
    <div classNameName="quiz-container">
      <div classNameName="title"> Manage quizzes</div>
      <hr style={{ color: "green" }} />
      <div classNameName="add-new">
        <form action="/action_page.php">
          <fieldset className="border rounded-3 p-3">
            <legend className="float-none w-auto px-3">Add New Quizzes</legend>
            <div className="form-floating mb-3">
              <input type="text" className="form-control"  placeholder="Your quiz name" value={name} onChange={(event)=> setName(event.target.value)}/>
              <label for="floatingInput">Name</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control" placeholder="Description" value={description} onChange={(event)=> setDescription(event.target.value)}  />
              <label for="floatingPassword">Description</label>
            </div>
            <div className="my-3">
              <Select
                value={type}
                // onChange={this.handleChange}
                options={options}
                placeholder={"quiz type ..."}
              />
            </div>

            <div classNameName="more-actions form-group">
              <label className="mb-1">Upload Image</label>
              <input type="file" className="form-control"  onChange={(event)=> HandlerImage(event.target.value)} />
            </div>
          </fieldset>
        </form>
      </div>
      <div classNameName="list-detail"> table</div>
    </div>
  );
};

export default ManageQuiz;
