import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./report.css";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import pic from "../img/1.png";
import pic2 from "../img/25.png";
import { motion } from "framer-motion";
import ic1 from "../SchoolDashboard/img/t1.png";
import ic2 from "../SchoolDashboard/img/t2.png";
import Connecting2 from "./Connecting2";

import { app } from "../Base";
import { GlobalContext } from "../AuthState/GlobalContext";
const db = app.firestore().collection("Teachers");

function Connecting1() {
  const { current, currentData, currentUser } = useContext(GlobalContext);
  const [getData, setGetData] = useState([]);
  const [commentIn, setCommentIn] = useState([]);
  const { id } = useParams();

  const getPack = async () => {
    const docRef = await db.doc(id);
    const docData = await docRef.get();

    setGetData(docData.data());
  };

  const gettingComment = async () => {
    const newData = await db.doc(id).get();
    setCommentIn(newData.data());

    console.log(newData);
  };

  const hist = useHistory();
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100%",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,

      // border: "2px solid #000",
      // backgroundImage: "linear-gradient(#4c87df, #1854b1, #2233ac)",
      backgroundColor: "white",
      // color: "white",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "60%",

      display: "flex",
      // alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getPack();
    gettingComment();
  }, []);

  return (
    <>
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            className="thin2"
          >
            <div
              style={{
                height: "1000%",
                width: "100%",
                display: "flex",
                // justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  // background: "red",
                  width: "80%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* Connect with Gideon{" "} */}
                </div>
                <CloseCircleOutlined
                  style={{
                    fontSize: "30px",
                    outline: "none",
                    cursor: "pointer",
                    background: "#4285f4 ",
                    color: "white",
                    borderRadius: "50px",
                  }}
                />
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
              >
                {" "}
                Connect With {current && current.email}
                {/* {currentUser && currentUser.fullname} */}
              </div>
              <div
                style={{
                  height: "80px",
                  width: "80px",
                  background: "lightgray",
                  marginTop: "10px",
                }}
              >
                <img
                  src={currentData && currentData.avatar}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  height: "20px",
                  width: "80px",
                  // background: "lightgray",
                  // marginTop: "10px",
                }}
              >
                <img
                  src={pic2}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    // borderRadius: "10px",
                  }}
                />
              </div>
              <div
                className="the_exper"
                // style={{
                //   width: "60%",
                //   // background: "red",
                //   // height: "30px",
                //   marginTop: "20px",
                // }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "cente",
                    // height: "100%",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      // background: "red",
                      alignItems: "center",
                      marginLeft: "35px",
                    }}
                  >
                    <img
                      src={ic2}
                      style={{
                        height: "10px",
                        width: "10px",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        marginLeft: "10px",
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      Lagos
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
                    <div
                      style={{
                        marginLeft: "10px",
                        fontWeight: "bold",
                        fontSize: "12px",
                      }}
                    >
                      4 years experience
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Subject :{""}{" "}
                <div
                  style={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  Mathematics
                </div>
              </div>
              <p
                style={{
                  width: "90%",
                  textAlign: "center",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                Please pay N1,000 to the account number here - 00011122233
                (GTBank) or click on pay to recieve code. Once you get the code,
                click on the profile and input the code to get the contact
                detals.
              </p>
              {/* {open ? ( */}
              {/* <Connecting2 /> */}
              {/* ) : ( */}
              <Button
                onClick={() => {
                  hist.push("/pay");
                }}
                type="primary"
                block
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                  background: "#4285f4",
                  fontSize: "17px",
                  borderRadius: "5px",
                  margin: "10px",
                  width: "90%",
                }}
              >
                Connect
              </Button>
              {/* )} */}
            </div>
          </motion.div>
        </Fade>
      </Modal>
    </>
  );
}

export default Connecting1;
