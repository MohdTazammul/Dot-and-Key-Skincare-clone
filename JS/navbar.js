function navBar(){
    return ` <!-- the main container of navbar -->
    <div id="nav">
    <div class="grey-line">

    </div>
    <div class="nav-bar-cont"  >
        <div class="bar">
            <div id="bar-icon-id" style="display:inline-block;">
                <span class="iconify bar-icon" data-icon="uim:bars" style="color: black; font-size:34px"></span>
            </div>
        </div>
        <div class="logo">
            <a href="index.html"><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_e80384cd-15b5-4e3e-a99b-7f852a0facad_260x.jpg?v=1604292598
            "></a>
        </div>
        <div class="search">
           <div>
            <span class="search-box">
                <span class="iconify span-search" data-icon="eva:search-outline"></span>
                <input type="text" placeholder="Search" id="Search-input">
            </span>
            <a href=""><span class="iconify bag-profile" id="bag" data-icon="teenyicons:bag-outline"></span></a>
            <a href=""></a><span id="profile" class="iconify bag-profile" data-icon="clarity:user-line"></span></a>
           </div>
        </div>
    </div>
    <div class="red-banner">
        <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/18-TIMER-DESKTOP_2_a477fc3a-0e42-4dba-8b66-530f610aeb71.gif?v=1639404201
        ">
    </div>

    <!-- POP up div -->
    <div class="pop-up-cont" id="pop-up-cont-id">
            <div id="navPopLeft-Left">
                <a href="" class="navPopAnchor"><h4>WHAT'S NEW?</h4></a>
                <a href="" class="navPopAnchor"><h4>BEST SELLERS</h4></a>
                <a href="" class="navPopAnchor"><h4>WINTER TOP PICKS</h4></a>
                <a href="" class="navPopAnchor"><h4>BY CONCERN</h4></a>
                <a href="products.html" class="navPopAnchor"><h4>ALL PRODUCTS</h4></a>
                <a href="" class="navPopAnchor"><h4>NEW BODYCARE RANGE</h4></a>
                <a href="" class="navPopAnchor"><h4>MERCH STORE</h4></a>
                <a href="" class="navPopAnchor"><h4>GIFT, WITH LOVE</h4></a>
                <a href="" class="navPopAnchor"><h4>IKWI NUTRITION</h4></a>
                <a href="" class="navPopAnchor"><h4>KNOW US BETTER</h4></a>
                <a href="" class="navPopAnchor"><h4>PROFILE</h4></a>
                <a href="" class="navPopAnchor"><h4>LOG IN</h4></a>
            </div>
            
            <div id="navPopLeft-Right">
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/last_day.png?v=1639463877" alt="">
            </div>
    </div>
    <!-- POP up div -->
</div>
   `
}


function popUp(){
    
  var navMiddle1Div=document.getElementById("bar-icon-id")
  console.log(navMiddle1Div)
  
  
  
  navMiddle1Div.addEventListener("click",function (){
      console.log("clicked")
    var navPopLeft= document.getElementById("pop-up-cont-id") 
    if(navPopLeft.style.display=="grid"){
      navPopLeft.style.display="none";
    }
    else{
      navPopLeft.style.display="grid";
    }
  })

  
  let searchResult=document.getElementById("Search-input").addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        let content=document.getElementById("Search-input").value;;
        console.log(content)
    }
})
}

export {navBar,popUp}