function navBar(){
    return ` <!-- the main container of navbar -->
        
    <div id="navContainer">
      <!-- top of the navbar -->
        <div id="navTop">
           
        </div>
        <!-- pop,logo,search,cart,profile -->
        <div id="navMiddle">
            <!-- left side of the middle -->
            <div id="navMiddle1">
                <!-- pop button -->
                <button id="navMiddle1Div">
                    <!-- icon work of the left button -->
                    <div id="navm1"></div>
                    <div id="navm2"></div>
                    <div id="navm3"></div>
                </button>
                
            </div>
            <!-- logo of the website -->
<div id="navMiddle2"><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_e80384cd-15b5-4e3e-a99b-7f852a0facad_260x.jpg?v=1604292598" alt=""></div>
           <!-- search,cart and profile -->
<div id="navMiddle3">
                <div>
                    <!-- icon of the search input -->
                    <i class="fas fa-search" style="margin-top: 7px;"></i>
                    <!-- input -->
                    <input type="text" placeholder="Search" id="NavInp">
                </div>
            </div>
        <div id="NavMiddle4">
           <div> <button id="navCartBtn"><i class="fas fa-shopping-bag fa-2x"></i></button></div>
           <div> <a href="" class="navPopAnchor"><i class="fas fa-user-alt fa-2x"></i></a></div>
        </div>

        </div>
        <!-- blinking bottom of navbar -->
        <div id="navBottom"> <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/18-TIMER-DESKTOP_2_a477fc3a-0e42-4dba-8b66-530f610aeb71.gif?v=1639404201" alt=""></div>

    </div>
    </div>
    <div id="navPopLeft">
        <div id="navPopDiv">
            <div id="navPopLeft-Left">
                <a href="" class="navPopAnchor"><h4>WHAT'S NEW?</h4></a>
                <a href="" class="navPopAnchor"><h4>BEST SELLERS</h4></a>
                <a href="" class="navPopAnchor"><h4>WINTER TOP PICKS</h4></a>
                <a href="" class="navPopAnchor"><h4>BY CONCERN</h4></a>
                <a href="" class="navPopAnchor"><h4>ALL PRODUCTS</h4></a>
                <a href="" class="navPopAnchor"><h4>NEW BODYCARE RANGE</h4></a>
                <a href="" class="navPopAnchor"><h4>MERCH STORE</h4></a>
                <a href="" class="navPopAnchor"><h4>GIFT, WITH LOVE</h4></a>
                <a href="" class="navPopAnchor"><h4>IKWI NUTRITION</h4></a>
                <a href="" class="navPopAnchor"><h4>KNOW US BETTER</h4></a>
                <a href="" class="navPopAnchor"><h4>PROFILE</h4></a>
                <a href="" class="navPopAnchor"><h4>LOG IN</h4></a>
            </div>
            
            <div id="navPopLeft-Right">
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/last_day.png?v=1639463877" alt="" style="width: 100%; height: 100%;">
            </div>
        </div>
        
    </div>

    <div id="navCart">
        <h2 style="margin-left: 20px;">Bag (0)</h2>
        <hr>
        
        <div id="navCartEmpty">YOUR BAG IS EMPTY. LET'S FILL IT UP!</div>
    </div> `
}


function popUp(){
    
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
}
export {navBar,popUp}