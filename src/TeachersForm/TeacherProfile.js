import React from "react";
import "./pro.css";
import profile from "../img/p4.png";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Input, Button } from "antd";
import { app } from "../Base";
import { useHistory } from "react-router-dom";

const theData = app.firestore().collection("Teachers");
function TeacherProfile({
  setprofile,
  setQualification,
  UploadMultipleFile,
  SignUpUser,
  MultipleFileChange,
  setDescription,
  mulitpleFileOptions,
}) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      // backgroundColor: back,
      // border: "2px solid #000",
      backgroundImage: "linear-gradient(#4c87df, #1854b1, #2233ac)",

      color: "white",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "100%",
      height: "50%",
      display: "flex",
      alignItems: "center",
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

  const imageUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = await storageRef.child(file.name);
    await fileRef.put(file);
    setprofile(await fileRef.getDownloadURL());
  };
  const imageUploaded = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = await storageRef.child(file.name);
    await fileRef.put(file);
    setQualification(await fileRef.getDownloadURL());
  };
  const hist = useHistory();

  return (
    <>
      <Button
        type="primary"
        block
        style={{
          marginTop: "10px",
        }}
        onClick={() => {
          handleOpen();
          hist.push("/schooldash");
          // UploadMultipleFile();
          // uploadSingleFiles();
          // SignUpUser();
        }}
      >
        Continue
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
        <div
          style={{ backgroundColor: "#f1f1f1", height: "100vh", width: "100%" }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: " center",
              alignItems: "center",
            }}
          >
            <div className="second_box11 ">
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  // justifyContent: " center",
                  alignItems: "center",
                  marginTop: "20px",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "170px",
                    width: "170px",
                    borderRadius: "360px",
                    backgroundColor: "red",
                  }}
                >
                  <img
                    src={profile}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ fontWeight: "bold", marginTop: "5px" }}>
                  Upload a Profile Image
                </div>
                <Input
                  onChange={imageUpload}
                  style={{ width: "80%", marginTop: "5px" }}
                  type="file"
                />
                <br />
                <div style={{ fontWeight: "bold", marginTop: "5px" }}>
                  Upload your CV (doc/pdf)
                </div>
                <Input
                  onChange={imageUploaded}
                  style={{ width: "80%", marginTop: "5px" }}
                  type="file"
                />
                <br />
                <div style={{ fontWeight: "bold", marginTop: "5px" }}>
                  Profile Description
                </div>
                <Input.TextArea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  resize="none"
                  placeholder="write a profile description ..."
                  style={{ width: "80%", resize: "none", height: "70px" }}
                />
                {/* <br /> */}
                <Button
                  onClick={() => {
                    // window.location.reload(true);
                    SignUpUser();
                    UploadMultipleFile();
                    mulitpleFileOptions();
                    hist.push("/teacherdash");
                  }}
                  type="primary"
                  // block
                  style={{
                    marginTop: "10px",
                    width: "80%",
                    height: "40px",
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TeacherProfile;
