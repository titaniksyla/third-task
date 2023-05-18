import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Button = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen((prev) => !prev);
  };

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button className="btn" onClick={deleteHandler}>
        {props.button}
      </button>
      {modalIsOpen && <Modal click={closeModalHandler} />}
      {modalIsOpen && <Backdrop click={closeModalHandler} />}
    </div>
  );
};

export default Button;
