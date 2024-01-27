import React, { FC } from "react";
import { Button } from "react-bootstrap";

type props = {
  buttonText: string,
  handleAdd: () => void;
};

const CustomButton: FC<props> = ({ handleAdd, buttonText }) => {
  return (
    <Button
      onClick={handleAdd}
      variant="danger"
      style={{
        width: 250,
        boxShadow: "1px 2px 3px rgba(0,0,0,0.5)",
        fontFamily: "Ubuntu",
        fontWeight: "800",
        letterSpacing: "2px",
        borderRadius: "60px",
      }}
    >
      {buttonText || "NA"}
    </Button>
  );
};

export default CustomButton;
