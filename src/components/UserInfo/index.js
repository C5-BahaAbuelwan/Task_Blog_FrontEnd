import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import { AiFillEdit } from "react-icons/ai";
import "./style.css";
const UserInfo = () => {
  const [info, setInfo] = useState({});
  const [address, setAddress] = useState({});
  const [company, setCompany] = useState({});
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editUserName, setEditUserName] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editWebsite, setEditWebsite] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    getInfo();
  }, []);
  const getInfo = async () => {
    const userName = localStorage.getItem("userName");

    await axios
      .get(`https://jsonplaceholder.typicode.com/users?username=${userName}`)
      .then((result) => {
        console.log(result.data[0].address.city);
        setInfo(result.data[0]);
        setAddress(result.data[0].address);
        setCompany(result.data[0].company);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelOnClick = () => {
    if (edit && id === 1) {
      info.name = editName;
      setEdit(false);
    } else if (id === 2 && edit) {
      info.email = editName;
      setEdit(false);
    } else if (id === 3 && edit) {
      info.phone = editName;
      setEdit(false);
    } else if (id === 4 && edit) {
      info.website = editName;

      setEdit(false);
    } else if (id === 5 && edit) {
      info.username = editName;

      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <div className="Container">
      <div className="userInfo">
        <div className="imageContainer">
          <img
            className="userImage"
            src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
            alt="userImage"
          />
        </div>
        <div className="largeContainer">
          <div className="infoContainer">
            <p className="disc" id="name">
              Name
            </p>

            {edit ? (
              id === 1 ? (
                <div className="editInfo">
                  <input
                    placeholder="EditName"
                    onChange={(e) => {
                      setEditName(e.target.value);
                    }}
                  />

                  <button
                    onClick={() => {
                      handelOnClick();
                    }}
                  >
                    Ok
                  </button>
                  <button
                    onClick={() => {
                      setEdit(false);
                    }}
                  >
                    X
                  </button>
                </div>
              ) : (
                <>
                  {" "}
                  <p id="nameInfo">
                    {info.name}{" "}
                    <button
                      onClick={() => {
                        handelOnClick();
                        setId(1);
                      }}
                    >
                      edit
                    </button>
                  </p>{" "}
                </>
              )
            ) : (
              <>
                {" "}
                <p id="nameInfo">
                  {info.name}{" "}
                  <Button
                    id="editButton"
                    className="editButton"
                    onClick={() => {
                      handelOnClick();
                      setId(1);
                    }}
                    variant="success"
                  >
                    <AiFillEdit />
                  </Button>{" "}
                </p>{" "}
              </>
            )}

            <p id="email">Email</p>

            {edit && id === 2 ? (
              <div className="editInfo">
                <input
                  placeholder="Edit Email"
                  onChange={(e) => {
                    setEditName(e.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    handelOnClick();
                  }}
                >
                  Ok
                </button>
                <button
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <>
                {" "}
                <p id="emailInfo">
                  {info.email}{" "}
                  <Button
                    className="editButton"
                    onClick={() => {
                      handelOnClick();
                      setId(2);
                    }}
                    variant="success"
                  >
                    <AiFillEdit />
                  </Button>{" "}
                </p>{" "}
              </>
            )}

            <p id="email">User Name</p>

            {edit && id === 5 ? (
              <div className="editInfo">
                <input
                  placeholder="Edit Email"
                  onChange={(e) => {
                    setEditName(e.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    handelOnClick();
                  }}
                >
                  Ok
                </button>
                <button
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <>
                {" "}
                <p id="emailInfo">
                  {info.username}{" "}
                  <Button
                    className="editButton"
                    onClick={() => {
                      handelOnClick();
                      setId(5);
                    }}
                    variant="success"
                  >
                    <AiFillEdit />
                  </Button>{" "}
                </p>{" "}
              </>
            )}

            <p id="phone">Phone</p>

            {edit && id === 3 ? (
              <div className="editInfo">
                <input
                  placeholder="Edit Phone "
                  onChange={(e) => {
                    setEditName(e.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    handelOnClick();
                  }}
                >
                  Ok
                </button>
                <button
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <>
                {" "}
                <p id="phoneInfo">
                  {info.phone}{" "}
                  <Button
                    className="editButton"
                    onClick={() => {
                      handelOnClick();
                      setId(3);
                    }}
                    variant="success"
                  >
                    <AiFillEdit />
                  </Button>{" "}
                </p>{" "}
              </>
            )}

            <p id="website">Website</p>

            {edit && id === 4 ? (
              <div className="editInfo">
                <input
                  placeholder="Edit Website"
                  onChange={(e) => {
                    setEditName(e.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    handelOnClick();
                  }}
                >
                  Ok
                </button>
                <button
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  X
                </button>
              </div>
            ) : (
              <>
                {" "}
                <p id="websiteInfo">
                  {info.website}{" "}
                  <Button
                    className="editButton"
                    onClick={() => {
                      handelOnClick();
                      setId(4);
                    }}
                    variant="success"
                  >
                    <AiFillEdit />
                  </Button>{" "}
                </p>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
