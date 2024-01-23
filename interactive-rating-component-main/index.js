let card1 = document.querySelector(".maincontainer");
let card2 = document.querySelector(".maincontainer2");
let submit = document.querySelector(".button");
let circle4 = document.querySelector(".circle4");
let circle5 = document.querySelector(".circle5");
let numberChange = document.querySelector(".numberChange");

circle4.addEventListener("click", function () {
    if (circle5.classList.contains("selecionada")) {
        circle4.classList.remove("selecionada");
    }
    circle4.classList.toggle("selecionada");
    circle5.classList.remove("selecionada");
    numberChange.innerHTML = circle4.innerText;
});

circle5.addEventListener("click", function () {
    if (circle4.classList.contains("selecionada")) {
        circle5.classList.remove("selecionada");
    }
    circle5.classList.toggle("selecionada");
    circle4.classList.remove("selecionada");
    numberChange.innerHTML = circle5.innerText;
});

submit.addEventListener("click", function () {
    if (circle4.classList.contains("selecionada") || circle5.classList.contains("selecionada")) {
        card2.style.display = "block";
        card1.style.display = "none";
    }
});
