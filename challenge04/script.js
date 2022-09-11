const visor = document.getElementById("visor");
const result = document.getElementById("result");
const end = document.createElement("br");
let validate = false;
const space = "&#32";

/* Inserir os números e símbolos */
const insertNumber = (value) => {
  if (validate) {
    result.innerHTML = "";
  }

  insert(value);
};

const insertSymbol = (value) => {
  result.innerHTML += space;
  insert(value);
  result.innerHTML += space;
};

const insert = (value) => {
  validate = false;
  const number = result.innerHTML;

  result.innerHTML = number + value;
};

const clean = () => {
  result.innerHTML = "";
  visor.innerHTML = "";
};

const back = () => {
  const back = result.innerHTML;
  result.innerHTML = back.substring(0, back.length - 1);
};

const equal = () => {
  calculate();
};

const calculate = () => {
  const calc = result.innerHTML;
  console.log(calc);

  visor.innerHTML += calc;
  visor.innerHTML += " = ";

  try {
    const expression = eval(calc);
    result.innerHTML = expression;
    visor.innerHTML += expression;
    visor.appendChild(end);
    validate = true;
  } catch (error) {
    result.innerHTML = alert("Operação inválida!");
    clean();
  }
};
