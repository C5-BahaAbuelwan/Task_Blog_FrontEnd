import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AddPost from "../addPost";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DeletePop from "../deletePopUp";
import { setPostsAction } from "../../redux/reducer/post";
import EditPost from "../editPost";
import svgFile from "./undraw_not_found_h44f.svg"
import "./style.css";

const Posts = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [edit, setEdit] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);

  const { id, posts,isLoggedIn } = useSelector((state) => {
    return {
     
      id: state.auth.id,
      posts: state.posts.posts,
      isLoggedIn:state.auth.isLoggedIn,
    };
  });

  useEffect(() => {
    getPosts();
    getComments();
  }, [edit]);
  useEffect(() => {
    getComments();
  }, [edit]);

  const getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        // console.log(result.data);
        setPost(result.data);
        dispatch(setPostsAction(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComments = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((results) => {
        setComments(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="postsPage">
      {isLoggedIn?(<><AddPost />

<div className="postsContainer">
  {posts &&
    posts.map((element, index) => {
      return (
        <div class="projcard projcard-blue">
          <div class="projcard-innerbox">
            <div className="comments">
              <h5>Comments</h5>
            {comments &&
              comments.map((element1, index) => {
                return element1.postId === element.id ? (
                  
                    <p className="comment">{element1.body}</p>
                  
                ) : (
                  <></>
                );
              })}

            </div>
            

           
            
            <div class="projcard-textbox">
              <div class="projcard-title">{element.title}</div>

              <div class="projcard-subtitle">Name uther</div>
              <div class="projcard-bar"></div>
              <div class="projcard-description">{element.body}</div>

              {id == element.userId ? (
                <div className="buttonss">
                  <EditPost id={element.id} className="edits" />
                  <DeletePop id={element.id} />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      );
    })}
</div></>):(<div className="noLogin"><h5 className="LoginTitle">Please <a href="/login" >Login</a> to see our users Posts</h5>
<img src={svgFile}/>
</div>)}
      {/* <AddPost />

      <div className="postsContainer">
        {posts &&
          posts.map((element, index) => {
            return (
              <div class="projcard projcard-blue">
                <div class="projcard-innerbox">
                  <div className="comments">
                    <h5>Comments</h5>
                  {comments &&
                    comments.map((element1, index) => {
                      return element1.postId === element.id ? (
                        
                          <p className="comment">{element1.body}</p>
                        
                      ) : (
                        <></>
                      );
                    })}

                  </div>
                  

                 
                  
                  <div class="projcard-textbox">
                    <div class="projcard-title">{element.title}</div>

                    <div class="projcard-subtitle">Name uther</div>
                    <div class="projcard-bar"></div>
                    <div class="projcard-description">{element.body}</div>

                    {id == element.userId ? (
                      <div className="buttonss">
                        <EditPost id={element.id} className="edits" />
                        <DeletePop id={element.id} />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};
export default Posts;
