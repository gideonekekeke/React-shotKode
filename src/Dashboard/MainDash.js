import React from "react";
import FirstDash from "./FirstDash";
import HeaderView from "./HeaderView";
import SeconDash from "../Dashboard/SeconDash";
import MobileDash from "../MobileDash/MobileDash";
import "./userstyle.css";

function MainDash({ avatar }) {
  return (
    <div style={{ height: "100%", backgroundColor: "#f1f1f1" }}>
      <div
        style={
          {
            // height: "100%",
            // width: "100%",
            // display: "flex",
            // justifyContent: "center",
            // flexDirection: "column",
            // alignItems: "center",
          }
        }
      >
        <HeaderView />
        <div
          className="thetwo_dash"
          style={{
            display: "flex",
            // justifyContent: "center",
            width: "100%",
            // flexWrap: "wrap",
            // alignItems: "center",
            // backgroundColor: "red",
            marginTop: "40PX",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              // alignItems: "center",
              flexWrap: "wrap",
              // flexDirection: "column-reverse",
              width: "100%",
            }}
          >
            <FirstDash className="the_ogadash" />
            <SeconDash avatar={avatar} />
          </div>
        </div>
        <MobileDash className="theMobile" />
      </div>
    </div>
  );
}

export default MainDash;
