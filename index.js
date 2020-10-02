

var imageArray = new Array();

imageArray[0] = new Image();
imageArray[0].src = "images/dice1.png";

imageArray[1] = new Image();
imageArray[1].src = "images/dice2.png";

imageArray[2] = new Image();
imageArray[2].src = "images/dice3.png";

imageArray[3] = new Image();
imageArray[3].src = "images/dice4.png";

imageArray[4] = new Image();
imageArray[4].src = "images/dice5.png";

imageArray[5] = new Image();
imageArray[5].src = "images/dice6.png";




// playerOne
var randomNumber1 = Math.floor(Math.random()*6) +1;

var myImage = document.querySelector(".img1");

function changeImage(){
  
  if(randomNumber1==1){
   myImage.src =imageArray[0].src;
  }
  else if(randomNumber1==2){
    myImage.src =imageArray[1].src;
  }
  else if(randomNumber1==3){
    myImage.src =imageArray[2].src;
  }
  else if(randomNumber1==4){
    myImage.src =imageArray[3].src;
  }
  else if(randomNumber1==5){
    myImage.src =imageArray[4].src;
  }
  else if(randomNumber1==6){
    myImage.src =imageArray[5].src;
  }
}
changeImage();

//playerTwo

var myImage2 = document.querySelector(".img2");
var randomNumber2 = Math.floor(Math.random()*6) +1;
function changeImage2(){
  
  if(randomNumber2==1){
   myImage2.src =imageArray[0].src;
  }
  else if(randomNumber2==2){
    myImage2.src =imageArray[1].src;
  }
  else if(randomNumber2==3){
    myImage2.src =imageArray[2].src;
  }
  else if(randomNumber2==4){
    myImage2.src =imageArray[3].src;
  }
  else if(randomNumber2==5){
    myImage2.src =imageArray[4].src;
  }
  else if(randomNumber2==6){
    myImage2.src =imageArray[5].src;
  }
}
changeImage2();

function winner(){
  if(randomNumber1 > randomNumber2){
    document.querySelector(".winner").innerHTML="🚩PLAYER ONE WINS";
  }
  else if(randomNumber2 > randomNumber1){
    document.querySelector(".winner").innerHTML="PLAYER TWO WINS🚩";
  }
  else{
    document.querySelector(".winner").innerHTML="IT'S A TIE🖖";
  }
}

winner();