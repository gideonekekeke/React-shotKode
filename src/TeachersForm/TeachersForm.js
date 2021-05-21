import React, { useState, useEffect } from "react";
import "./Teach.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from "antd";
import "antd/dist/antd.css";
import { app } from "../../src/Base";
import { Link } from "react-router-dom";
import { Input } from "antd";
import {
  singleFileUpload1,
  multipleFilesUpload1,
  getMultipleFiles1,
} from "../TeachersForm/apis";
import facepic from "../Register/SignupAuth/Social/21.png";
import google from "../Register/SignupAuth/Social/22.png";
import twitter from "../Register/SignupAuth/Social/23.png";
import { useHistory } from "react-router-dom";
import TeacherProfile from "./TeacherProfile";

const theData = app.firestore().collection("Teachers");

function TeachersForm() {
  const hist = useHistory();
  const [open, setOpen] = React.useState(true);

  const [toggle, setToggle] = useState(true);
  const [fullname, setfullname] = useState("");
  const [location, setlocation] = useState("");
  const [password, setpassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [salary, setsalary] = useState("");
  const [subject, setsubject] = useState("");
  const [experience, setexperience] = useState("");
  const [profile, setprofile] = useState(null);
  const [qualification, setQualification] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(true);
  // const [emailError, setemailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [nameError, setNameError] = useState("");

  const [multipleProgress, setMultipleProgress] = useState(0);
  const [singleFile, setSingleFile] = useState("");
  const [singleProgress, setSingleProgress] = useState(0);

  const pushtoogle = () => {
    setShow(!show);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
  };
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  };
  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };
  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };
  // const uploadSingleFiles = async () => {
  //   const formData = new FormData();
  //   formData.append("file", singleFile);
  //   await singleFileUpload1(formData, singleFileOptions);
  //   props.getsingle();
  // };

  const UploadMultipleFile = async () => {
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("location", location);
    formData.append("salary", salary);
    formData.append("subject", subject);
    formData.append("phoneNumber", phoneNumber);
    formData.append("experience", experience);
    formData.append("email", email);
    formData.append("password", password);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    await multipleFilesUpload1(formData, mulitpleFileOptions);
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

  // const uploadImage = async (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = app.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   await fileRef.put(file);
  //   setprofile(await fileRef.getDownloadURL());
  // };

  const SignUpUser = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    theData.doc(newUser.user.uid).set({
      fullname,
      location,
      phoneNumber,
      salary,
      subject,
      experience,
      qualification,
      avatar: await profile,
      email,
      password,
      description,
      createdAt: new Date().toLocaleString(),
      dateTime: Date.now().toString(),
    });
    hist.push("/teacherdash");
  };-

  const LogInNewUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    hist.push("/teacherdash");
  };

  useEffect(() => {
    getMultipleFilesList();
  }, []);

  const onlick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="regNav" style={{}}>
      <div className="regNav1">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            // width: "100%",
          }}
        >
          <div className="first_box22">
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "70px",
                  width: "70px",
                  // backgroundColor: "white",
                  background: " #f8f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "#4285F4",
                  }}
                >
                  S
                </div>
              </div>
              <div style={{ marginTop: "10PX" }}>shotkode</div>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "40px",
                  width: "80%",
                }}
              >
                {" "}
                Access to quality teachers and access to quality schools
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  marginTop: "20px",
                  width: "80%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur sit ame adipiscing ame
                elit, Lorem ipsum dolor sit amet, consectetur sit ame adipiscing
                ame elit,Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>

          <div className="second_box22">
            <>
              {toggle ? (
                <>
                  <div className="allReg">
                    <div className="reg">Register</div>
                    <div className="regInput">
                      <TextField
                        style={{
                          width: "100%",
                        }}
                        size="small"
                        id="outlined-password-input"
                        type="text"
                        onChange={(e) => setfullname(e.target.value)}
                        label="Full Name"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      {/* <p>{nameError}</p> */}
                      <br />
                      {/* <TextField
                        style={{
                          width: "100%",
                          marginTop: "10px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="School Name"
                        onChange={(e) => setschoolname(e.target.value)}
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      /> */}
                      <div className="sklcon">
                        <TextField
                          style={{
                            width: "47%",
                          }}
                          size="small"
                          id="outlined-password-input"
                          label=" Location"
                          type="text"
                          onChange={(e) => setlocation(e.target.value)}
                          autoComplete="current-password"
                          variant="outlined"
                        />
                        <TextField
                          style={{
                            width: "47%",
                          }}
                          size="small"
                          id="outlined-password-input"
                          label="Phone No:"
                          type="text"
                          onChange={(e) => setphoneNumber(e.target.value)}
                          autoComplete="current-password"
                          variant="outlined"
                        />
                      </div>
                      <TextField
                        value={subject}
                        onChange={(e) => {
                          setsubject(e.target.value);
                        }}
                        style={{
                          width: "100%",
                        }}
                        // id="outlined-select-currency-native"
                        select
                        label="Role Offered"
                        helperText="Please select a salary range and experience"
                        variant="outlined"
                        // value="choose from these selection"
                      >
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="Mathematics"
                        >
                          Mathematics{" "}
                        </option>
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="English"
                        >
                          {" "}
                          English
                        </option>
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="Biology"
                        >
                          {" "}
                          Biology{" "}
                        </option>
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="FurtherMaths"
                        >
                          {" "}
                          FurtherMaths{" "}
                        </option>
                      </TextField>
                      {/* 
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      > */}
                      <TextField
                        value={salary}
                        onChange={(e) => {
                          setsalary(e.target.value);
                        }}
                        style={{
                          width: "100%",
                          // height: "40px",
                        }}
                        // id="outlined-select-currency-native"
                        select
                        label="Salary Range"
                        helperText="Please select a subject you can teach"
                        variant="outlined"
                        // value="choose from these selection"
                      >
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="#70,000 - #100,000"
                        >
                          #70,000 - #100,000
                        </option>
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="#120,000 - #150,000"
                        >
                          {" "}
                          #120,000 - #150,000{" "}
                        </option>
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="#200,000 - #250,000"
                        >
                          {" "}
                          #200,000 - #250,000{" "}
                        </option>
                      </TextField>
                      <TextField
                        value={experience}
                        onChange={(e) => {
                          setexperience(e.target.value);
                        }}
                        style={{
                          width: "100%",
                          // height: "40px",
                        }}
                        // id="outlined-select-currency-native"
                        select
                        label="experience"
                        // helperText="Please select a subject you can teach"
                        variant="outlined"
                        // value="choose from these selection"
                      >
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="4 years"
                        >
                          4 years
                        </option>
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="5 years"
                        >
                          {" "}
                          5 years
                        </option>
                        <option
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                          value="4 years"
                        >
                          6 years
                        </option>
                      </TextField>
                      {/* </div> */}
                      {/* <div class="file-input">
                        <input
                          onChange={(e) => MultipleFileChange(e)}
                          type="file"
                          id="file"
                          className="file"
                        />
                        <label for="file">
                          {" "}
                          Click to upload your CV and Profile pic
                        </label>
                      </div> */}
                      <TextField
                        style={{
                          width: "100%",
                          marginTop: "10px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="E-mail"
                        type="text"
                        onChange={(e) => setemail(e.target.value)}
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <Input.Password
                        placeholder="password"
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          zIndex: 1,
                          height: "40px",
                        }}
                        onChange={(e) => setpassword(e.target.value)}
                      />{" "}
                      <Button
                        type="primary"
                        block
                        style={{
                          marginTop: "10px",
                        }}
                        onClick={() => {
                          UploadMultipleFile();
                          // uploadSingleFiles();
                          SignUpUser();
                        }}
                      >
                        Continue
                      </Button>
                      {/* <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "10px",
                        }}
                      >
                        Use Socail Medai
                      </div> */}
                      {/* <div className="lcon">
                        <div
                          style={{
                            width: "25%",
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <img src={facepic} style={{ height: "20px" }} />
                          <img src={google} style={{ height: "20px" }} />
                          <img src={twitter} style={{ height: "20px" }} />
                        </div>
                      </div> */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "10px",
                          width: "300px",
                          marginTop: "10px",
                        }}
                      >
                        <div>Already have an Account,</div>
                        <div
                          style={{
                            marginLeft: "5px",
                            color: "red",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={onlick}
                        >
                          Log In
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="allReg1">
                    <div className="regInput">
                      <br />

                      <div className="sklcon"></div>
                      <div className="reg1">Log In</div>
                      <TextField
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        style={{
                          width: "100%",
                          marginTop: "10px",
                        }}
                        size="small"
                        id="outlined-password-input"
                        label="E-mail"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />

                      <Input.Password
                        placeholder="password"
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          zIndex: 1,
                          height: "40px",
                        }}
                        onChange={(e) => setpassword(e.target.value)}
                      />

                      <Button
                        type="primary"
                        block
                        style={{
                          marginTop: "10px",
                        }}
                        onClick={() => {
                          LogInNewUser();
                        }}
                      >
                        SignUp
                      </Button>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "10px",
                        }}
                      >
                        Use Socail Medai
                      </div>
                      <div className="lcon">
                        <div
                          style={{
                            width: "25%",
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <img src={facepic} style={{ height: "20px" }} />
                          <img src={google} style={{ height: "20px" }} />
                          <img src={twitter} style={{ height: "20px" }} />
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "10px",
                          width: "300px",
                        }}
                      >
                        <div>Don't Have An Account,</div>
                        <div
                          style={{
                            marginLeft: "5px",
                            color: "red",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={onlick}
                        >
                          Sign Up
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachersForm;

// TeachersForm
