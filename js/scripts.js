window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {

    const inputCharacter = document.getElementById("inputCharacter").value;

    document.querySelector("span#userInput1").innerText = inputCharacter;
    document.querySelector("div#character").removeAttribute("class");
    event.preventDefault();
  };
};

