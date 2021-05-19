import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../AuthState/GlobalContext";
import "./userstyle.css";
// import FirstDash from "./FirstDash";
// import SeconDash from "./SeconDash";

function HeaderView1() {
  const { currentUser } = useContext(GlobalContext);
  return (
    <>
      <div
        style={{
          width: "100%",
          // height: 0,
          // backgroundColor: "red",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            // marginTop: "10PX",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                height: "70px",
                width: "70px",
                backgroundColor: "white",
                // background: " #f8f9fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                // marginTop: "50PX",
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "15px",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                HI {currentUser && currentUser.fullname}
              </div>
              <div>Welcome to Shotkode</div>
            </div>
          </div>
          <div
            style={{
              fontWeight: "bold",
              marginTop: "30px",
              marginLeft: "10px",
            }}
          >
            filter{" "}
          </div>
          <TextField
            className="filter"
            style={{
              marginTop: "20px",
            }}
            // id="outlined-select-currency-native"
            select
            label="Role Offered"
            helperText="Select a Teacher"
            variant="outlined"
            // value="choose from these selection"
          >
            <option
              style={{ marginLeft: "10px", cursor: "pointer" }}
              value="Maths"
            >
              Mathematics{" "}
            </option>
            <option
              style={{ marginLeft: "10px", cursor: "pointer" }}
              value="English"
            >
              {" "}
              English Language{" "}
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
          <TextField
            className="filter"
            style={{
              marginTop: "20px",
            }}
            // id="outlined-select-currency-native"
            select
            label="Salary Range"
            helperText="Select salary Range"
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
          <Button
            className="thebutton"
            style={{
              height: "50px",
              width: "150px",
              background: "#4285f4 ",
              color: "white",
              marginTop: "20px",
            }}
          >
            Search
          </Button>
        </div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <FirstDash />
          <SeconDash />
        </div> */}
      </div>
    </>
  );
}

export default HeaderView1;
