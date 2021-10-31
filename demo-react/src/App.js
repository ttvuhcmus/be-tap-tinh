import React, { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Notification from "./components/Notification";

export default function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [notification, setNotification] = useState("");

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    if (name === "first") {
      setFirstNumber(value);
      return;
    }
    setSecondNumber(value);
  };

  const handleChangeRadio = (event) => {
    const { value } = event.target;
    setOperator(value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!firstNumber) {
      setNotification("Vui long nhap so thu nhat");
      return;
    }
    if (!secondNumber) {
      setNotification("Vui long nhap so thu hai");
      return;
    }
    if (!operator) {
      setNotification("Vui long chon phep tinh");
      return;
    }

    if (Number.isNaN(+firstNumber) || Number.isNaN(+secondNumber)) {
      setNotification("Vui long nhap so");
      return;
    }

    setNotification("");

    switch (operator) {
      case "plus":
        setThirdNumber(+firstNumber + +secondNumber);
        break;

      case "minus":
        setThirdNumber(+firstNumber - +secondNumber);
        break;

      case "multi":
        setThirdNumber(+firstNumber * +secondNumber);
        break;

      case "divide":
        setThirdNumber(+firstNumber / +secondNumber);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Header title="Be tap tinh" />
      <Form
        first={firstNumber}
        second={secondNumber}
        third={thirdNumber}
        onChangeInput={handleChangeInput}
        onChangeRadio={handleChangeRadio}
        onSubmitForm={handleSubmitForm}
      />
      <Notification notification={notification} />
    </div>
  );
}
