//consulta de elementos manipulados//
const yoda = document.querySelector(".yoda");
const darthVader = document.querySelector(".darthVader");

//frequencia de pulos inicio-fim//
const jump = () => {
  yoda.classList.add("jump");

  setTimeout(() => {
    yoda.classList.remove("jump");
  }, 500);
};

/*
//manipulação de direção ao caminhar//
const walk = () => {
  yoda.classList.add("walk");

  setTimeout(() => {
    yoda.classList.remove("walk");
  }, none);
};*/

/*Execução de layout dos elementos:
Delimitação de planeta, barra passagem ou apoia; 
delimitação sol, identifica limite solar;
Yoda locomove-se, darth-vader acompanha;
Yoda toca no café, começa a contagem crescente;
Yoda coleta todo o café =8 e toca na via lactea, victory/reset;
Yoda toca no Darth-Vader ou sol, toca na via-lactea sem 
coletar todo café <8 ou tempo esgotar 1m e via lactea fechar,
Game-Over/reset*/
const loop = setInterval(() => {
  const darthVaderPosition = darthVader.offsetleft;
  const yodaPosition = +window.getComputedStyle(yoda).bottom.replace("px", "");
  //const yoda.style.left = leftDirection("px", "");//
  //const yoda.style.top = top("px", "");//

  console.log(yodaPosition);

  if (darthVaderPosition <= 72) {
    darthVader.style.animation = "none";
    darthVader.style.left = "${darthVaderPosition}px";

    yodaPosition.style.animation = "none";
    yoda.style.bottom = "${yodaPosition}px";

    yodaPosition.src = "./assets/yodaa-loser.gif";
    yoda.style.width = "75px";
    yodaPosition.style.marginLeft = "50px";
  }
}, 10);

//Comandos do teclado para manipulação do Yoda//
eventTarget.addEventListener("keydown", (event) => {
  if (event.keyCode === 38) console.log(JSON.stringify(event, null, 2));
  jump();
});
/*
document.addEventListener("keydown=37",walk);
document.addEventListener("keyup=37",none);
document.addEventListener("keydown=39",walk);
document.addEventListener("keyup=39",none);
*/
