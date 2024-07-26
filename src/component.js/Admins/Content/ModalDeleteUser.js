import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DeleteUser } from "../../../Service/apiServices";
import { toast } from "react-toastify";

const ModelDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => setShow(false);

  const handleSubmitDelete = async () => {
    let data = await DeleteUser(dataDelete.id);
    console.log("conponent res", data);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListUser();
      props.setcurrentPage(1);
      await props.fetchListUserwithPageinate(1);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  }; 

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          Woohoo !!!, are you sure about this !
          <b> {dataDelete && dataDelete.Email ? dataDelete.Email : ""} </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDelete()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelDeleteUser;
