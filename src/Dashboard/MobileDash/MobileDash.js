import React, { useState, useEffect } from "react";
import { Button } from "antd";
import pic from "../../img/25.png";
import pic2 from "../../img/1.png";
import flg from "../../SchoolDashboard/img/t1.png";
import flg2 from "../../SchoolDashboard/img/t2.png";
import { app } from "../../Base";
import Connecting1 from "../../ConnectingPage/Connecting1";
const dataBase = app.firestore().collection("Schools");

function MobileDash() {
  const [data, setData] = useState([]);

  const getUserData = async () => {
    await dataBase.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      setData(i);
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="theMobile">
      {data.map(
        ({ id, avatar, experience, fullname, schoollocation, subject }) => (
          <div className="user_dashM">
            <div
              style={{
                display: "flex",
                width: "90%",
                justifyContent: "space-between",
                marginTop: 20,
                margin: "10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    backgroundColor: "lightgray",
                    borderRadius: "50px",
                  }}
                >
                  <img
                    src={avatar}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "50px",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <div style={{ fontWeight: "bold" }}>{fullname}</div>
                  <div style={{ width: "50px", height: "10px" }}>
                    <img
                      src={pic}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img style={{ height: "15px" }} src={flg2} />
                    <div style={{ fontSize: "12px", marginLeft: "10px" }}>
                      {schoollocation}
                    </div>
                  </div>
                </div>
              </div>

              <Connecting1 />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default MobileDash;
