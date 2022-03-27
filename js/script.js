
let values = ["+", "-", "*", "/", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].forEach(createButton);


function createButton (sim) {
  let but = document.createElement('button');
  but.innerText = sim;
  document.body.firstElementChild.lastElementChild.append(but);
  but.onclick = () => document.body.firstElementChild.firstElementChild.firstElementChild.append(sim);
}


let delet = createButtonDelete();


function createButtonDelete () {
  let but = document.createElement('button');
  but.innerText = "C";
  document.body.firstElementChild.lastElementChild.append(but);
  but.onclick = () => document.body.firstElementChild.firstElementChild.firstElementChild.innerText = "";
}

 
let res = createButtonResult();
 

function createButtonResult () {
  let but = document.createElement('button');
  but.innerText = "=";
  document.body.firstElementChild.lastElementChild.append(but);
  but.onclick = calc;
}


function calc () {
  let result = eval(document.body.firstElementChild.firstElementChild.innerText);
  document.body.firstElementChild.firstElementChild.firstElementChild.innerText = "";
  document.body.firstElementChild.firstElementChild.firstElementChild.append(result);
} 
