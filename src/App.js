import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Button from "@mui/material/Button";
import Popup from "./components/popup";
import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Modal from "./components/modal";
import { CSSTransition } from "react-transition-group";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <Button onClick={handleClick} variant="contained" className="open-popup">Open Modal Popup</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Popup />
      </Modal>
    </div>
  );
}

export default App;
