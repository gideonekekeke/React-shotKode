import React, { useState } from "react";
import facepic from "../Register/SignupAuth/Social/21.png";
import google from "../Register/SignupAuth/Social/22.png";
import twitter from "../Register/SignupAuth/Social/23.png";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
// import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, Input } from "antd";
import "antd/dist/antd.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
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
            <div className="first_box3">
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
                  elit, Lorem ipsum dolor sit amet, consectetur sit ame
                  adipiscing ame elit,Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>

            <div className="second_box3">
              <>
                <div>
                  <div className="allReg"></div>
                </div>
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
                        onClick={() => {}}
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
                        >
                          Sign Up
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
