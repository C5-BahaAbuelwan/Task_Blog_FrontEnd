import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/LogIn";
import Users from "./components/Users";
import UserInfo from "./components/UserInfo";
import Posts from "./components/Posts";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/info" element={<UserInfo />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<Home />} />


      </Routes>
    </div>
  );
}

export default App;
