import { useState } from "react";
import "../Quiz/ManageQuiz.scss";
import Select from "react-select";
import { postCreateNewQuiz } from "../../../Service/apiServices";
import { toast } from "react-toastify"; // Nhập thư viện toast để hiển thị thông báo
import TableQuiz from "./QuizTable";
import { Accordion } from "react-bootstrap";

// Các tùy chọn cho mức độ khó của quiz
const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];

const ManageQuiz = () => {
  // Khởi tạo các state để lưu trữ dữ liệu của form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [preIMG, setpreIMG] = useState("");

  // Hàm xử lý khi người dùng chọn file hình ảnh
  const HandlerImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      // Tạo URL tạm thời cho hình ảnh để hiển thị trước
      setpreIMG(URL.createObjectURL(event.target.files[0]));
      // Lưu trữ file hình ảnh vào state
      setImage(event.target.files[0]);
    }
  };

  // Hàm xử lý khi người dùng submit form
  const handerSubmitQuiz = async (event) => {
    if (!name || !description) {
      toast.error("Name/description is missing"); /// check xem name... da dc dien vao'
      return;
    }
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    // Gửi dữ liệu form đến API
    let res = await postCreateNewQuiz(description, name, type?.value, image);
    if (res && res.EC === 0) {
      setName("");
      setDescription(""); //// set ve rong khi hoan thanh'
      setImage(null);
    } else {
      toast.error(res.EM);
    }
  };

  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span style={{ color: "Yellow" }}>Add New Quizzes</span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              {/* Form để thêm quiz mới */}
              <form onSubmit={handerSubmitQuiz}>
                <fieldset className="border rounded-3 p-3">
                  <legend className="float-none w-auto px-3">Quiz</legend>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your quiz name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="form-floating">Name</label>
                  </div>

                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                    <label htmlFor="floatingPassword">Description</label>
                  </div>
                  <div className="my-3">
                    <Select
                      defaultValue={type}
                      onChange={setType}
                      options={options}
                      placeholder={"quiz type ..."}
                    />
                  </div>

                  <div className="more-actions form-group">
                    <label className="mb-1">Upload Image</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={HandlerImage}
                    />
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn btn-warning">
                      Save
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="list-detail">
        {" "}
        <TableQuiz />{" "}
      </div>
    </div>
  );
};

export default ManageQuiz;
