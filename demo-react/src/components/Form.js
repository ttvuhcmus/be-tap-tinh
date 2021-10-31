import React from "react";
import "../styles/Form.css";

export default function Form({
  first,
  second,
  third,
  onChangeInput,
  onChangeRadio,
  onSubmitForm,
}) {
  return (
    <form id="form" onSubmit={onSubmitForm}>
      <div className="container">
        <div className="item">So thu nhat:</div>
        <div className="item">
          <input
            type="text"
            name="first"
            value={first}
            className="input-field first"
            onChange={onChangeInput}
          />
        </div>
        <div className="item">
          <input
            type="radio"
            id="plus"
            className="operator"
            name="operator"
            value="plus"
            onChange={onChangeRadio}
          />
          <label htmlFor="plus">Cong</label>

          <input
            type="radio"
            id="minus"
            className="operator"
            name="operator"
            value="minus"
            onChange={onChangeRadio}
          />
          <label htmlFor="minus">Tru</label>
        </div>

        <div className="item">So thu hai</div>
        <div className="item">
          <input
            type="text"
            name="second"
            value={second}
            className="input-field second"
            onChange={onChangeInput}
          />
        </div>
        <div className="item">
          <input
            type="radio"
            id="multi"
            className="operator"
            name="operator"
            value="multi"
            onChange={onChangeRadio}
          />
          <label htmlFor="multi">Nhan</label>

          <input
            type="radio"
            id="divide"
            className="operator"
            name="operator"
            value="divide"
            onChange={onChangeRadio}
          />
          <label htmlFor="divide">Chia</label>
        </div>

        <div className="item">Ket qua</div>
        <div className="item">
          <input
            type="text"
            name="third"
            value={third}
            className="input-field third"
            readOnly
          />
        </div>
        <div className="item">
          <button type="submit">Tinh</button>
        </div>
      </div>
    </form>
  );
}
