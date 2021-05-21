import React from "react";
import FirstDash1 from "./FirstDash1";

import HeaderView from "./HeaderView1";
import SeconDash1 from "./SeconDash1";

function MainDash1({ avatar, description }) {
  return (
    <div style={{ height: "auto", backgroundColor: "#f1f1f1" }}>
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
            <FirstDash1 />
            <SeconDash1 avatar={avatar} description={description} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDash1;
