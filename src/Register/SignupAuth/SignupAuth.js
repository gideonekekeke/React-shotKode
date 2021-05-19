import React, { useState, useEffect } from "react";
import "./Signstyle.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from "antd";
import "antd/dist/antd.css";
import { app } from "../../Base";
import { Input } from "antd";
import {
  singleFileUpload,
  multipleFilesUpload,
  getMultipleFiles,
} from "../../data/api";
import facepic from "../../Register/SignupAuth/Social/21.png";
import google from "../../Register/SignupAuth/Social/22.png";
import twitter from "../../Register/SignupAuth/Social/23.png";
import { useHistory } from "react-router-dom";
import SchoolProfile from "../SignupAuth/SchoolProfile";
const db = app.firestore().collection("Schools");

function Shotform(props) {
  const hist = useHistory();
  const [open, setOpen] = React.useState(true);
  const [toggle, setToggle] = useState(true);
  const [fullname, setFullname] = useState("");
  const [schoollocation, setschoolocation] = useState("");
  const [schoolname, setschoolname] = useState("");
  const [password, setpassword] = useState("");
  const [profile, setprofile] = useState(null);
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [description, setDescription] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [show, setShow] = useState(true);

  const [multipleProgress, setMultipleProgress] = useState(0);
  const [singleFile, setSingleFile] = useState("");
  const [singleProgress, setSingleProgress] = useState(0);

  // const [fullnameErr, setfullnameErr] = useState({});
  // const [schoollocationErr, setschoollocationErr] = useState({});
  // const [schoolnameErr, setschoolnameErr] = useState({});
  // const [phoneNumberErr, setphoneNumberErr] = useState({});
  // const [emailErr, setemailErr] = useState({});
  // const [passwordErr, setpasswordErr] = useState({});

  const handleOpen = () => {
    setOpen(!open);
  };
  const pushtoogle = () => {
    setShow(!show);
  };

  const onCon = () => {
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
  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append("file", singleFile);
    await singleFileUpload(formData, singleFileOptions);
    props.getsingle();
  };

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("schoolname", schoolname);
    formData.append("schoollocation", schoollocation);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    await multipleFilesUpload(formData, mulitpleFileOptions);
  };

  // const formValidation = () => {
  //   const fullnameErr = {};
  //   const schoolnameErr = {};
  //   const schoollocationErr = {};
  //   const phoneNumberErr = {};
  //   const emailErr = {};
  //   const passwordErr = {};

  //   let isValid = true;
  //   if (!fullname) {
  //     fullnameErr.needname = "please put in your full name";
  //     isValid = false;
  //   }

  //   if (!schoolname) {
  //     schoolnameErr.needschool = "School Name Needed";
  //     isValid = false;
  //   }
  //   if (!schoollocation) {
  //     schoollocationErr.needlocation = "School Location Needed";
  //     isValid = false;
  //   }
  //   if (!phoneNumber) {
  //     phoneNumberErr.needumber = "Phone Number Needed";
  //     isValid = false;
  //   }
  //   if (!email.includes(".com")) {
  //     emailErr.needemail = "invalid email";
  //     isValid = false;
  //   }
  //   if (!password) {
  //     passwordErr.needpassword = "password needed";
  //     isValid = false;
  //   }
  //   setfullnameErr(fullnameErr);
  //   setschoolnameErr(schoolnameErr);
  //   setschoollocationErr(schoollocationErr);
  //   setphoneNumberErr(phoneNumberErr);
  //   setemailErr(emailErr);
  //   setpasswordErr(passwordErr);
  //   if (isValid) {
  //     return hist.push("/profile");
  //   } else {
  //     return "please fill in details ";
  //   }
  // };

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };
  const SignUpUser = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    db.doc(newUser.user.uid).set({
      fullname,
      phoneNumber,
      avatar: await profile,
      schoollocation,
      email,
      password,
      createdAt: new Date().toLocaleString(),
      dateTime: Date.now().toString(),
    });
    // hist.push("/dash");
  };

  const LogInNewUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    hist.push("/schooldash");
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
          <div className="first_box">
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

          <div className="second_box">
            <>
              {toggle ? (
                <div>
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
                        onChange={(e) => setFullname(e.target.value)}
                        label="Full Name"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      {/* {Object.keys(fullnameErr).map((key) => {
                        return (
                          <div
                            style={{
                              color: "red",
                              fontSize: "10px",
                              height: 0,
                              zIndex: 10,
                            }}
                          >
                            {fullnameErr[key]}
                          </div>
                        );
                      })} */}
                      <br />
                      <TextField
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
                      />
                      {/* {Object.keys(schoolnameErr).map((key) => {
                        return (
                          <div
                            style={{
                              color: "red",
                              fontSize: "10px",
                              height: 0,
                              zIndex: 10,
                            }}
                          >
                            {schoolnameErr[key]}
                          </div>
                        );
                      })} */}
                      <br />
                      <div className="sklcon">
                        <TextField
                          style={{
                            width: "47%",
                          }}
                          size="small"
                          id="outlined-password-input"
                          label="School Location"
                          type="text"
                          onChange={(e) => setschoolocation(e.target.value)}
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
                      {/* {Object.keys(emailErr).map((key) => {
                        return (
                          <div
                            style={{
                              color: "red",
                              fontSize: "10px",
                              height: 0,
                              zIndex: 10,
                            }}
                          >
                            {emailErr[key]}
                          </div>
                        );
                      })} */}
                      <br />
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
                      {/* {Object.keys(passwordErr).map((key) => {
                        return (
                          <div
                            style={{
                              color: "red",
                              fontSize: "10px",
                              height: 0,
                              zIndex: 10,
                            }}
                          >
                            {passwordErr[key]}
                          </div>
                        );
                      })} */}
                      <br />

                      {open ? (
                        <SchoolProfile
                          setprofile={setprofile}
                          UploadMultipleFiles={UploadMultipleFiles}
                          SignUpUser={SignUpUser}
                          MultipleFileChange={MultipleFileChange}
                          setDescription={setDescription}
                        />
                      ) : null}

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
                </div>
              ) : (
                <div>
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
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="password"
                        style={{
                          width: "100%",
                          marginTop: "10px",
                          zIndex: 1,
                          height: "40px",
                        }}
                      />
                      <Button
                        onClick={() => {
                          LogInNewUser();
                        }}
                        type="primary"
                        block
                        style={{
                          marginTop: "10px",
                          // backgroundColor: "red",
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
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shotform;
