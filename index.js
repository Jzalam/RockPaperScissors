function name(){
var yourName = prompt("Enter your name: ");
var res = yourName.toUpperCase().slice(0,10);
document.querySelector("p").innerHTML = res;
}
function RockPaperScissors(){
var random = Math.floor(Math.random()*3)+1;
var selector = prompt("Enter '1' for rock, Enter '2' for paper or Enter '3' for scissors.");
if(selector == 1){
    document.querySelector(".img1").setAttribute("src","images/rock.png");
}
else if(selector == 2){
    document.querySelector(".img1").setAttribute("src","images/paper.png");
}
else if(selector == 3){
    document.querySelector(".img1").setAttribute("src","images/scissors.png");
}
else{
    alert("Wrong input!");
}
if(random == 1){
    document.querySelector(".img2").setAttribute("src","images/rock.png");
}
else if(random == 2){
    document.querySelector(".img2").setAttribute("src","images/paper.png");
}
else{
    document.querySelector(".img2").setAttribute("src","images/scissors.png");
}
if(selector == 1 && random == 2){
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("h2").innerHTML = ("Player 2 Wins!🚩");
}
else if(selector == 1 && random == 3){
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("h2").innerHTML = ("🚩You Win!");
}
else if(selector == 2 && random == 1){
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("h2").innerHTML = ("🚩You Win!");
}
else if(selector == 2 && random == 3){
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("h2").innerHTML = ("Player 2 Wins!🚩");
}
else if(selector == 3 && random == 1){
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("h2").innerHTML = ("Player 2 Wins!🚩");
}
else if(selector == 3 && random == 2){
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("h2").innerHTML = ("🚩You Win!");
}
else{
    document.querySelector("h2").style.visibility = "visible";
    document.querySelector("h2").innerHTML = ("🚩Draw!🚩");
}
}
