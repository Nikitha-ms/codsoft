let input = document.getElementById("inputtext");
console.log(input);
let buttons = document.querySelectorAll("button");
console.log(buttons);
let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    const i = e.target.innerHTML;
    if (i == "AC") {
      string = "";
      input.value = string;
      return;
    }
    if (i == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
      return;
    }
    if (i == "=") {
      string = eval(string);
      input.value = string;
      return;
    }
    string+=i;
    input.value=string;
  });
});
