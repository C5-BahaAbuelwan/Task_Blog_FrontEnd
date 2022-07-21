import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  updatePostsAction,
  posts,
  setPostsAction,
} from "../../redux/reducer/post";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css"
function EditPost(props) {
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
  let posted=posts

  const handelEdit = () => {
    dispatch(
      updatePostsAction({id:props.id,newPosts:{title:title,id:props.id,body:body,userId:id}})
    );
    setShow(false);
  };

  const updates = () => {
    posted.map((element, index) => {
      if (element.id === props.id) {
        console.log( posted[index].title);
        posted[index].title = "title";
        posted[index].body = "body";
      }
    });
    dispatch(setPostsAction(posted));
  };

  return (
    <>
      {values.map((v, idx) => (
        <Button  variant="warning" key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Edit
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
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
              handelEdit();
            }} type="submit" value="Submit"/>
  </div>
</div>





          {/* <h5 className="Title">Title </h5>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="title"
          />
          <h5 className="Body">Body </h5>
          <textarea
            placeholder="Body"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              handelEdit();
            }}
          >
            submit
          </button> */}

          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label><br/>
            <input onChange={(e)=>{
                setBody(e.target.value)
              }} placeholder="title"/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              placeholder="Post Body"
            >
              <Form.Label>Post Body</Form.Label> <br/>
             <input placeholder="Body" onChange={(e)=>{
                setBody(e.target.value)
              }} />
             
            </Form.Group>
            <button onClick={()=>{
                handelAdd()
            }} >submit</button> */}
          {/* <Button onClick={()=>{
                handelAdd()
            }} variant="primary" type="submit">
              Submit
            </Button> */}
          {/* </Form> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditPost;
{
  /* render(<Example />); */
}
