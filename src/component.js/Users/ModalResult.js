import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const ModalResult = (props) => {
  const { show, setShow, dataModalR } = props;
  const Navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
  };
  const handleClose2 = () => {
    Navigate("/");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Your Result !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Total Question:{" "}
            <b style={{ color: "red" }}>{dataModalR.countTotal}</b>{" "}
          </div>
          <div>
            Total Correct answers:{" "}
            <b style={{ color: "green" }}>{dataModalR.countCorrect}</b>{" "}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Show answer
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalResult;
