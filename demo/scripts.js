document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstNumber = document.querySelector(".first").value;
  const secondNumber = document.querySelector(".second").value;
  const thirdNumber = document.querySelector(".third");
  const result = document.querySelector(".result");
  const operatorArr = document.querySelectorAll(".operator");

  let operator = "";

  operatorArr.forEach((item) => {
    if (item.checked) {
      operator = item.value;
    }
  });

  // operator !== ""
  if (!operator) {
    result.innerText = "Vui long chon phep tinh";
    return;
  }

  if (!firstNumber) {
    result.innerText = "Vui long nhap so thu nhat";
    return;
  }

  if (!secondNumber) {
    result.innerText = "Vui long nhap so thu hai";
    return;
  }

  if (Number.isNaN(+firstNumber) || Number.isNaN(+secondNumber)) {
    result.innerText = "Vui long nhap so";
    return;
  }

  result.innerText = "";
  thirdNumber.value = "";

  switch (operator) {
    case "plus":
      thirdNumber.value = +firstNumber + +secondNumber;
      break;

    case "minus":
      thirdNumber.value = +firstNumber - +secondNumber;
      break;

    case "multi":
      thirdNumber.value = +firstNumber * +secondNumber;
      break;

    case "divide":
      thirdNumber.value = +firstNumber / +secondNumber;
      break;
  }
});
