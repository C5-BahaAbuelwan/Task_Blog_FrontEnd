import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deletePostsAction } from "../../redux/reducer/post";
import "./style.css"

function DeletePop(props) {
  //   console.log(props.id);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelClick=()=>{
    dispatch(deletePostsAction(props.id)) 
    handleClose();
  }
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Posts</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure delete post ?</Modal.Body>
        <Modal.Footer>
          <Button className="deleteButtons" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="deleteButtons"
            variant="primary"
            onClick={() => {
                handelClick();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeletePop;

// render(<Example />);
