"use strict";

window.onload = init;

function init() {
 const addBtn = document.getElementById("addBtn")
 addBtn.onclick = onAddBtnClicked;

 const subtractBtn = document.getElementById("subtractBtn")
 subtractBtn.onclick = onSubtractBtnClicked;

 const multiplyBtn = document.getElementById(" multiplyBtn")
 multiplyBtn.onclick = onMultiplyBtnClicked;

 const divideBtn = document.getElementById(" divideBtn")
 divideBtn.onclick = onAddBtnClicked;
}

//calculations

function onAddBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 + num2;

    answerField.value = answer;
}

function onSubtracttnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 - num2;

    answerField.value = answer;
}

function onMultiplyClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 * num2;

    answerField.value = answer;
}

function onDivideBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1 = Number(number1Field.value);
    let num2 = Number(number2Field.value);

    let answer = num1 / num2;

    answerField.value = answer;
}