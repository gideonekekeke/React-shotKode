import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./report.css";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import pic from "../img/1.png";
import pic2 from "../img/25.png";
import { motion } from "framer-motion";
import ic1 from "../SchoolDashboard/img/t1.png";
import ic2 from "../SchoolDashboard/img/t2.png";
import TextField from "@material-ui/core/TextField";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";

function Connecting3() {
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

  return (
    <>
      <Button
        onClick={handleOpen}
        type="primary"
        block
        style={{
          // marginTop: "20px",
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
        // marginBottom: "40px",
      >
        Continue
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        // closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            className="thin3"
          >
            <div className="the_holler" style={{}}>
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
                Connected
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
                  src={pic}
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
              <div className="the_exper1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "cente",
                    height: "100%",
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
              <div style={{ marginTop: "5px", display: "flex" }}>
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
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                Qualification
              </p>
              <div
                style={{
                  height: "100px",
                  width: "200px",
                  background: "silver",
                }}
              ></div>
              <div style={{ fontWeight: "bold", marginTop: "20px" }}>
                Contact Details
              </div>
              <div className="contacting">
                {" "}
                <WhatsAppIcon
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "15px",

                    // marginTop: "20px",
                  }}
                />
                <div style={{ marginLeft: "10px" }}>09095645353</div>
                <div
                  style={{
                    display: "flex",
                    fontWeight: "bold",
                    margin: "10px",
                    // flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    // flexDirection: "column",
                    width: "100%",
                    // marginTop: "-10px",
                  }}
                >
                  <EmailIcon style={{ color: "#4285f4", fontSize: "15px" }} />
                  <div style={{ marginLeft: "10px" }}> Chinyere@gmail.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </Fade>
      </Modal>
    </>
  );
}

export default Connecting3;
