import React from "react";
import { Button } from "antd";
import pic from "../img/25.png";
import pic2 from "../img/1.png";
import flg from "../SchoolDashboard/img/t1.png";
import flg2 from "../SchoolDashboard/img/t2.png";

function MobileDash() {
  return (
    <div className="theMobile">
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
                src={pic2}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
              />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div style={{ fontWeight: "bold" }}>Gideon Ekeke</div>
              <div style={{ width: "50px", height: "10px" }}>
                <img
                  src={pic}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  Ikeja, Lagos
                </div>
              </div>
              <div
                style={{
                  // marginTop: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img style={{ height: "15px" }} src={flg} />
                <div style={{ fontSize: "12px", marginLeft: "10px" }}>
                  4 Years experience
                </div>
              </div>
              <div>Subject : Mathematics</div>
            </div>
          </div>

          <Button
            style={{
              fontSize: "15px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              background: "#4285f4 ",
              color: "white",
              fontWeight: "bold",
              // height: "20px",
            }}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileDash;
