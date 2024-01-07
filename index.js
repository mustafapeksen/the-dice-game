var randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
document.querySelector(".dice>.img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".dice>.img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "	&#128681 Player1 Win!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Win! 	&#128681";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}