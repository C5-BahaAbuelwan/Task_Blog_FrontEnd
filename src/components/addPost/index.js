import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addPostsAction, posts } from "../../redux/reducer/post";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AddPost(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const { id, posts } = useSelector((state) => {
    return {
      id: state.auth.id,
      posts: state.posts.posts,
    };
  });

  const handelAdd = () => {
    dispatch(
      addPostsAction({
        title: title,
        body: body,
        id: posts.length + 1,
        userId: id,
      })
    );
    setShow(false);
  };
  return (
    <>
      {values.map((v, idx) => (
        <Button
          id="addPostsButton"
          key={idx}
          className="me-2 mb-2"
          onClick={() => handleShow(v)}
        >
          Add Post
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
  <div action="/action_page.php">
    <label for="fname">Title</label>
    <input onChange={(e) => {
              setTitle(e.target.value);
            }} type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Body</label>
    <textarea onChange={(e) => {
              setBody(e.target.value);
            }} type="text" id="lname" name="lastname" placeholder="Your last name.."/>
  
    <input   onClick={() => {
              handelAdd();
            }} type="submit" value="Submit"/>
  </div>
</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddPost;
{
  /* render(<Example />); */
}
