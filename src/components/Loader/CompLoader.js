import React from "react";
import {TailSpin} from "react-loader-spinner";

export const CompLoader = () => {

  return (
    <>
      <TailSpin
        
        color="#000"
        height={50}
        width={50}
        
        wrapperStyle  ={{
          height: "60vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      :
    </>
  );
};
