import React, { useContext, useState, useEffect } from "react";
import "./userstyle.css";
import EditIcon from "@material-ui/icons/Edit";
import mailimg from "./img/trophy_1f3c61.png";
import def from "./img/12.jfif";
import phoneimg from "./img/round-pushpin_1f4cd2.png";
import popimg from "./img/round-pushpin_1f4cd3.png";
import { Button, Input } from "antd";
import { app } from "../Base";
import { GlobalContext } from "../AuthState/GlobalContext";
import { useHistory } from "react-router-dom";
import CvUpdate1 from "./CvUpdate1";
import TeacherProfile from "../TeachersForm/TeacherProfile";
const db = app.firestore().collection("Teachers");
function SeconDash({ avatar }) {
  const hist = useHistory();
  const { current, currentData } = useContext(GlobalContext);
  const [name, setName] = useState("");

  const getName = async (id) => {
    const newUser = await app.auth().currentUser;
    if (newUser) {
      db.doc(newUser.uid)
        .get()
        .then((doc) => {
          setName(doc.data());
        });
    }
  };

  useEffect(() => {
    getName();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        height: "550px",
        borderRadius: "10px",
      }}
    >
      <div className="user_dash">
        <div className="proinfo">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                width: "70px",
                height: "40px",
                color: "grey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              My Profile
            </div>
            <div
              onClick={() => {
                app.auth().signOut();
                window.location.reload(true);
                hist.push("/");
              }}
              style={{
                width: "70px",
                height: "35px",
                background: "#4285f4",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Log Out
            </div>
          </div>
          <div className="nep">
            {avatar ? (
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  // background: "#4285f4",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={currentData && currentData.avatar}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  // background: "#4285f4",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={def}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
            )}
            <div
              style={{
                width: "30px",
                height: "30px",
                background: "red",
                borderRadius: "30px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                position: "absolute",
                top: "20px",
                right: "80px",
              }}
            >
              <EditIcon
                style={{
                  color: "white",
                }}
              />
            </div>
            <div
              style={{
                color: "black",
                fontSize: "20px",
                marginTop: "15px",
              }}
            >
              {currentData && currentData.fullname}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "10px",
              justifyContent: "space-between",
              width: "230px",
              marginTop: "10px",
            }}
          >
            <div>
              <img src={mailimg} />
            </div>
            <div
              style={{
                fontSize: "15px",
                display: "flex",
                paddingTop: "4px",
              }}
            >
              {currentData && currentData.email}
            </div>
          </div>
          <div
            style={{
              height: "1px",
              width: "230px",
              background: "#DCDCDC",
              marginLeft: "25px",
              marginTop: "15px",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              paddingLeft: "10px",
              justifyContent: "space-between",
              width: "135px",
              marginTop: "10px",
            }}
          >
            <div>
              <img src={phoneimg} />
            </div>
            <div
              style={{
                fontSize: "15px",
                display: "flex",
                paddingTop: "4px",
              }}
            >
              {currentData && currentData.phoneNumber}
            </div>
          </div>
          <div
            style={{
              height: "1px",
              width: "230px",
              background: "#DCDCDC",
              marginLeft: "25px",
              marginTop: "15px",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              paddingLeft: "10px",
              justifyContent: "space-between",
              width: "135px",
              marginTop: "10px",
            }}
          >
            <div>
              <img src={popimg} />
            </div>
            <div
              style={{
                fontSize: "15px",
                display: "flex",
                paddingTop: "2px",
              }}
            >
              {currentData && currentData.location}
            </div>
          </div>
          <div
            style={{
              height: "1px",
              width: "230px",
              background: "#DCDCDC",
              marginLeft: "25px",
              marginTop: "15px",
            }}
          ></div>
          <br />
          <CvUpdate1 />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SeconDash;
