var n=document.querySelectorAll(".drum").length;
function bA(currKey)
{
  var acB=document.querySelector("."+currKey);
  acB.classList.add("pressed");
  setTimeout(function(){
    acB.classList.remove("pressed");
  },100);
}
function sw(ih){
  switch(ih){
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(ih);
  }
}

for(var i=0;i<n;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var ih=this.innerHTML;
    sw(ih);
    bA(ih);
  })
}

document.addEventListener("keydown",function(e){
  sw(e.key);
  bA(e.key);
})
