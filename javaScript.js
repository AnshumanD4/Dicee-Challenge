var random1 = (Math.floor(Math.random() * 6) + 1);
var player1 = "images/dice" + random1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",player1);

var random2 = (Math.floor(Math.random() * 6) +1);
var player2 = "/images/dice" + random2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", player2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
  
}
else if(random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw 🏳️";
}