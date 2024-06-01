// Getting Elements From The DOM
const btns = document.querySelectorAll(".btn");
const body = document.body;
// console.log(btns);

// Iterating over all buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    color = btn.value;
    changeBackground(color);
  });
});

function changeBackground(color) {
  console.log(color);
  body.className = "";
  if(color === "red"){
    body.classList.add("red")
  }
  else if(color === "purple"){
    body.classList.add("purple")
  }
  else if(color === "yellow"){
    body.classList.add("yellow")
  }
  else if(color === "green"){
    body.classList.add("green")
  }
  else if(color === "teal"){
    body.classList.add("teal")
  }
  else if(color === "blue"){
    body.classList.add("blue")
  }
  else console.log("idk");
  
}
changeBackground(color);

