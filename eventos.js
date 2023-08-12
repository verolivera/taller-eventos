let divSaludo = document.querySelector("div");
let btn = document.querySelector("button");

divSaludo.addEventListener("click", () => {
    alert('Hola! Soy el div');
  });

btn.onclick = saludo;

function saludo(){
    alert('Hola!');
    }
