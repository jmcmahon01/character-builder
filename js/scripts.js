window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {

    const inputCharacterName = document.getElementById("inputCharacterName").value;
    const inputCharacterAge = document.getElementById("inputCharacterAge").value;

    document.querySelector("span#userInput1").innerText = inputCharacterName;
    document.querySelector("span#userInput2").innerText = inputCharacterAge.toString();
    document.querySelector("div#character").removeAttribute("class");
    event.preventDefault();
  };
};

