import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./GetStyle.css";
import { Link } from "react-router-dom";
import pic from "../img/1.png";
import pic2 from "../img/4.jpg";
function Getstarted() {
  return (
    <div
      className="regNav"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="regNav44">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <div className="first_box44">
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
          <div className="second_box44">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
                width: "100%",
              }}
            >
              <div
                style={{ width: "80%", fontSize: "10px", textAlign: "center" }}
              >
                Lorem ipsum dolor sit amet, consectetur sit ame adipiscing ame
                elit,consectetur sit ame adipiscing ame elit,
              </div>
              <Link
                to="/signupteacher"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="sub_box44">
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "90%",
                        justifyContent: "space-around",
                        margin: "10px",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                          Sign up as a Teacher
                        </div>
                        <div style={{ fontSize: "10px", marginTop: "5px" }}>
                          create a free teacher account
                        </div>
                      </div>
                      <div className="the_image44">
                        <img
                          src={pic}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to="/signupschool"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="sub_box44">
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "90%",
                        justifyContent: "space-around",
                        margin: "10px",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                          Sign up as a School
                        </div>
                        <div style={{ fontSize: "10px", marginTop: "5px" }}>
                          create a free school account
                        </div>
                      </div>
                      <div className="the_image44">
                        <img
                          src={pic2}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
