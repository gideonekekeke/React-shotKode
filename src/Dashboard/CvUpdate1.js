import React, { useState } from "react";
import { Button, Input } from "antd";
import { app } from "../Base";
const theCv = app.firestore().collection("Teachers");
function CvUpdate1() {
  const [qualify, setQualify] = useState(null);

  const newImages = async (id) => {
    const theNewUser = await app.auth().currentUser;

    if (theNewUser) {
      await theCv.doc(id).collection("uploads").doc().set({
        postedBy: theNewUser.uid,
        createdUser: new Date().toLocaleString(),
        dateTime: Date.now().toString(),
        qualify,
      });
      setQualify("");
    }
  };

  const imageUploaded = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = await storageRef.child(file.name);
    await fileRef.put(file);
    setQualify(await fileRef.getDownloadURL());
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Upload your CV(doc/pdf)
      </div>
      <Input onChange={imageUploaded} type="file" />

      <Button
        onClick={() => {
          newImages();
        }}
        type="primary"
        block
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
          background: "#4285f4",
          fontSize: "17px",
          borderRadius: "5px",
        }}
        // marginBottom: "40px",
      >
        Upload Cv
      </Button>
    </>
  );
}

export default CvUpdate1;
