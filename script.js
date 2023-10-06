const button1 = document.getElementById("button1");
button1.addEventListener("click", guess);

const code = Math.floor(Math.random() * 100 + 100);

function guess(){
  let num = prompt("enter the code");
  const para = document.createElement("p");
  if(num == code){
    para.textContent = "Guess: " + num + " - your answer was correct!";
  } else if(num > code){
    para.textContent = "Guess: " + num + " - the code is a smaller number.";
  } else if(num < code){
    para.textContent = "Guess: " + num + " - the code is a larger number.";
  }
  document.body.appendChild(para);
}