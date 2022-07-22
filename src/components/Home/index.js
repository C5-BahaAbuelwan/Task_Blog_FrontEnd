
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import svgFile1 from "./login.svg"
import svgFile from "./undraw_fashion_blogging_re_fhi5.svg"

import "./style.css"

const Home=()=>{
    const navigate=useNavigate()
    const { isLoggedIn, name } = useSelector((state) => {
        return {
          isLoggedIn: state.auth.isLoggedIn,
          name: state.auth.name,
        };
      });
    return(
        

        <div className="Home">
            {isLoggedIn?(<div className="noLogin" >
                <h3 className="start">
                Welcome {name} ✨
            </h3>
            <h5 className="LoginTitle">We wish you a nice day</h5>
            <img className="imageHome"src={svgFile1}/>
            
            </div>):(<div className="noLogin"><h3 className="start">
                Welcome To Our Blog ✨
            </h3>
            <h5 className="LoginTitle">Please <a onClick={()=>{
                navigate("/login")
            }}>Login</a> to see our users Posts</h5>
            <img className="imageHome"src={svgFile}/></div>)}
            
        </div>
    )
}

export default Home