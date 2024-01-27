import React from "react";

export default function Input({ ...props }) {
  return (
    <input
      {...props}
      
      style={{
        height: "38px",
        width: "500px",
        // border:"none",
        borderRadius: "60px",
        borderColor: "#D6000080",

        padding: 20,
        boxShadow: "1px 2px 2px rgba(0,0,0,0.2)",
      }}
    />
  );
}
