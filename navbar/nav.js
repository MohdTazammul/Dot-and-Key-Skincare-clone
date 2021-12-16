
var navMiddle1Div=document.getElementById("navMiddle1Div")
console.log(navMiddle1Div)
navMiddle1Div.addEventListener("click",function (){
  var navPopLeft= document.getElementById("navPopLeft") 
  if(navPopLeft.style.display=="none"){
      navPopLeft.style.display="block";
  }
  else{
      navPopLeft.style.display="none";
  }
})

var navCartBtn=document.getElementById("navCartBtn")
navCartBtn.addEventListener("click",function (){
  var navCart= document.getElementById("navCart") 
  if(navCart.style.display=="none"){
    navCart.style.display="block";
  }
  else{
    navCart.style.display="none";
  }
})