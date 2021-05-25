import React, { useState, useEffect } from "react";
import pic from "../img/25.png";
import pic1 from "../img/1.png";
import { Button } from "antd";
import { getMultipleFiles1, getSingleFiles1 } from "../TeachersForm/apis";
import { app } from "../Base";
import "./userstyle.css";
import ic1 from "../SchoolDashboard/img/t1.png";
import ic2 from "../SchoolDashboard/img/t2.png";
import Connecting1 from "../ConnectingPage/Connecting1";

const dataBase = app.firestore().collection("Teachers");

function FirstDash1({ avatar, description }) {
  const [singleFiles, setSingleFiles] = useState([]);
  const [multipleFiles, setMultipleFiles] = useState([]);
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

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles1();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles1();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getSingleFileslist();
    getMultipleFilesList();
    getUserData();
  }, []);

  return (
    <div
      style={{
        // height: "300px",
        backgroundColor: "white",
        width: "1100px",
        // marginTop: "150px",
        boxShadow: "0px 5px 7px -2px rgba(0, 0, 0, 0.35)",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          margin: "10px",
          flexDirection: "column",
        }}
      >
        <div style={{ fontWeight: "bold", margin: "10px" }}>
          {" "}
          Teachers Curated for you
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            borderTop: "1px solid silver",
            borderBottom: "1px solid silver",
            height: "70px",
            alignItems: "center",
          }}
        >
          <div className="tableText">Names and Rating</div>
          <div className="tableText">Location and experience</div>
          <div className="tableText">Subject</div>
          <div className="tableText">Action</div>
        </div>

        {data.map(
          ({
            id,
            experience,
            fullname,
            location,
            subject,
            salary,
            avatar,
            description,
            qualification,
          }) => (
            <div
              key={id}
              style={{
                display: "flex",

                width: "95%",
                // borderTop: "1px solid silver",
                borderBottom: "1px solid silver",
                // backgroundColor: "black",
                // height: "70px",
                // alignItems: "center",
                // margin: "10px",
              }}
            >
              <div className="themain_dash" style={{}}>
                <div className="theimage_dash" style={{}}>
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      backgroundColor: "lightgray",
                    }}
                  >
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "50px",
                      }}
                      src={avatar}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        marginLeft: "10px",
                        marginTop: "10px",
                        // backgroundColor: "red",
                        width: "150px",
                      }}
                    >
                      {fullname}
                    </div>
                    <div
                      style={{
                        height: "20px",
                        width: "40px",
                        marginLeft: "10px",
                      }}
                    >
                      {" "}
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        }}
                        src={pic}
                      />
                    </div>
                  </div>
                </div>
                <div style={{}} className="thelocation_dash">
                  <div
                    style={{
                      // fontWeight: "bold",
                      width: "200px",
                      display: "flex",
                      marginLeft: "30px",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        // background: "red",
                        // width: "200px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          heigth: "15px",
                          width: "15px",
                          objectFit: "cover",
                          // margin: "10px",
                        }}
                      >
                        {" "}
                        <img
                          src={ic2}
                          style={{
                            heigth: "100%",
                            width: "100%",
                            objectFit: "cover",
                            // margin: "10px",
                          }}
                        />
                      </div>

                      <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
                        {" "}
                        {location}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      // background: "red",
                      alignItems: "center",
                      marginLeft: "35px",
                    }}
                  >
                    <img
                      src={ic1}
                      style={{
                        height: "10px",
                        width: "10px",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ marginLeft: "10px" }}>{experience}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100px",
                    // backgroundColor: "red",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {subject}
                </div>
                {open ? (
                  <Connecting1 />
                ) : (
                  <Button
                    onClick={handleOpen}
                    style={{
                      fontSize: "25px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      background: "#4285f4 ",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    +
                  </Button>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default FirstDash1;
