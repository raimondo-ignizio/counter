import "/counter/css/style.css";

let counterContainer = document.getElementById("counter-container");

let counter = document.createElement("p");
counter.innerHTML = 0;
counterContainer.append(counter);

let plusButton = document.createElement("button");
plusButton.type = "button";
plusButton.innerHTML = "+";
let minusButton = document.createElement("button");
minusButton.type = "button";
minusButton.innerHTML = "-";

let buttons = document.createElement("div");
buttons.className = "buttons-container";

counterContainer.append(buttons);
buttons.append(plusButton);
buttons.append(minusButton);

plusButton.onclick = function counterAdd() {
  let n = Number(counter.innerHTML);
  n++;
  counter.innerHTML = n;
};

minusButton.onclick = function counterSubtract() {
  let n = Number(counter.innerHTML);
  n--;
  counter.innerHTML = n;
};
