import React, { useState, useEffect } from "react";
import pic from "../img/25.png";
import pic1 from "../img/1.png";
import { Button } from "antd";
import { getMultipleFiles1, getSingleFiles1 } from "../TeachersForm/apis";
import { app } from "../Base";
import "./userstyle.css";
import ic2 from "../SchoolDashboard/img/t1.png";
import Connecting1 from "../ConnectingPage/Connecting1";

const dataBase = app.firestore().collection("Schools");

function FirstDash({ avatar, qualification }) {
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
    <div className="the_ogadash">
      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          width: "100%",
          height: "100%",
          margin: "10px",
          flexDirection: "column",
        }}
      >
        <div style={{ fontWeight: "bold", margin: "10px" }}>
          {" "}
          Schools Curated for you
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
          <div className="tableText">School Location</div>

          <div className="tableText">Action</div>
        </div>

        {data.map(
          ({
            id,
            avatar,
            experience,
            fullname,
            schoollocation,
            subject,
            createdBy,
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
                <div style={{}} className="thelocation_dash1">
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
                        {schoollocation}
                      </div>
                    </div>
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
                <Connecting1 id={id} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default FirstDash;
