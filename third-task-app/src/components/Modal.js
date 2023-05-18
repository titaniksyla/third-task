import React from "react";
import Row from "./Row";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-title">
        <h2>Theme Color</h2>
        <a href="#">Change Theme</a>
      </div>
      <div className="modal-rows">
        <Row text="Font Color" hexCodeClr="#444444" />
        <Row text="Background Color" hexCodeClr="#FFFFF" />
        <Row text="Button Color" hexCodeClr="#2072EF" />
        <Row text="Button Border Color" hexCodeClr="#2072EF" />
        <Row text="Button Mouseover Color" hexCodeClr="#0053D1" />
      </div>
      <div className="modal-btn">
        <button className="btn btn--alt" onClick={props.click}>
          Cancel
        </button>
        <button className="btn" onClick={props.click}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
