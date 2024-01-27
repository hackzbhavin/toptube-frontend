import React from "react";
import { Container } from "react-bootstrap";
import CustomNav from "../components/CustomNav";
import AddVideoForm from "../components/forms/AddVideoForm";

export default function AddVideo() {
  return (
    <>
      <CustomNav navTo={"Channel Collection"} />

      <Container className="d-flex justify-content-center mt-5">
        <div
          style={{
            fontFamily: "Ubuntu",
            fontSize: "90px",
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Discover your earning potential
        </div>
      </Container>

      <Container className="d-flex justify-content-center mt-5">
        <AddVideoForm />
      </Container>
    </>
  );
}
