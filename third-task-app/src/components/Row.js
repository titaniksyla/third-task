import React from "react";

const Row = (props) => {
  const colorBox = props.hexCodeClr;
  return(
    <div className="row-cont">
      <div className="row-left">{props.text}</div>
      <div className="row-right">
        <div className="hex">{props.hexCodeClr}</div>
        <div className="colored-box" style={{backgroundColor: `${colorBox}`}}></div>
      </div>
    </div>
  );
}

export default Row;