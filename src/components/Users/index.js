import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import svgFile from "./undraw_slider_re_ch7w.svg"
import { useSelector } from "react-redux";
import avatar from "./avatar1.jpg"

// import avatar form "./avatar1.jpg"
import "./style.css";
const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [posts, setPosts] = useState([]);

  const { id, isLoggedIn } = useSelector((state) => {
    return {
     
      id: state.auth.id,
      posts: state.posts.posts,
      isLoggedIn:state.auth.isLoggedIn,
    };
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAlbums = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((result) => {
        setAlbums(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPosts = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((result) => {
        setPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="users">
     {isLoggedIn?(<>
      {users &&
        users.map((element, index) => {
          getAlbums(element.id);
          getPosts(element.id);

          return (
            <div class="contain">
            <div class="card">
              
              <img
                src={avatar}
                alt="Person"
                class="card__image"
              />
              <p class="card__name">{element.name}</p>
              <div class="grid-container">
                <div class="grid-child-posts">{albums.length} Albums</div>
    
                <div class="grid-child-followers">{posts.length} posts</div>
              </div>
             
              <button id="buttonUsers" class="btn draw-border">Show Album</button>
              <button id="buttonUsers" class="btn draw-border">Show Posts</button>
            </div>
           
          </div>
            
            
            
            /* 
            <Card className="card"style={{ width: "18rem" ,background:"rgba(255, 255, 255, 0.8)",border:" 1px solid rgba(121,20,87,0.4)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)" }}>
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Total Albums ={albums.length}
                </Card.Subtitle>
                <Card.Text>Total Posts ={posts.length}</Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card> */

           
          );
        })}
     </>):((<div className="noLogin"><h5 className="LoginTitle">Please <a href="/login" >Login</a> to see our users</h5>
<img src={svgFile}/>
</div>))}

      
    </div>
  );
};

export default Users;
