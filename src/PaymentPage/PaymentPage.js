import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../AuthState/GlobalContext";

const onSuccess = (reference) => {
  console.log(reference);
};

const onClose = () => {
  console.log("closed");
};

function PaymentPage() {
  const { current, currentData, currentUser } = useContext(GlobalContext);
  const hist = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  const onSuccess = (refrence) => {
    hist.push("/code");
    console.log(refrence);
  };

  const initializePayment = usePaystackPayment({
    reference: new Date().getTime(),

    email: email,
    name: name,
    amount: amount,
    publicKey: "pk_test_f747091150685438ae86d5a98b5df3c60275f367",
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: "200px",
          height: "400px",
          width: "320px",
          background: "silver",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>your amount is : {amount / 100}</div>
          <label>
            {" "}
            Email
            <Input
              placeholder="email"
              style={{ height: "50px" }}
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            {" "}
            Name
            <Input
              placeholder="Name"
              style={{ height: "50px" }}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            {" "}
            amount
            <Input
              style={{ height: "50px" }}
              placeholder="Amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </label>
        </div>
        <Button
          type="primary"
          size="large"
          style={{
            width: "70%",
            marginTop: "10px",
            borderRadius: "5px",
          }}
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
}

export default PaymentPage;
