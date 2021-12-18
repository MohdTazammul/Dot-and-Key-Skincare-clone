let heartFlag=false;


var url =  window.location.href;
 var output= "";
 for(var i=url.length-1; ;i--)
     {
         if(url[i] == "?")
             break;
         else
             output+=url[i];
     }
 output = output.split("").reverse().join("");
 console.log("id passed by previous page "+output);
 
 var data = JSON.parse(localStorage.getItem("DotAndKeyProducts"));
 
 var arr = [];
 for(var i=0; i<data.length; i++)
     {
         if(data[i].id == output)
             {
                 arr.push(data[i]);
                 break;
             }
     }
    //console.log(arr);

var obj=arr[0];

//console.log(obj)


let descul=document.getElementById("descplist");
let perksul=document.getElementById("perkslist");
let smallimg=document.getElementById("smallimg");
let size=document.getElementById("size");
console.log(obj)

////DISCRIPTION ADDING
obj.description.map((item)=>{
//console.log(item)
let li=document.createElement("li");
li.textContent=item;
descul.append(li)
})

///FOR DISCOUNT AMOUNT ADDING
let x=Math.floor((obj.discount/100)*obj.price)
x=obj.price-x;
x=x.toFixed(2)
//console.log(x)
document.getElementById("disc").textContent=`RS:  ${x}`;



///PERKS ADDING
obj.perks.map((item)=>{
//console.log(item)
let li=document.createElement("li");
li.textContent=item;
perksul.append(li)
})

////TITLE ADDING
let title=document.getElementById("title");
title.textContent=obj.title;

///FOR DISCOUNT ====0
if(obj.discount!=0){

let price=document.getElementById("pec");
price.textContent=`RS:  ${obj.price}`;
}

///BIG IMAGE APPENDING
let imgs=document.getElementById("bigimg")
let img=document.createElement("img");
img.src=obj.images[0];
imgs.append(img)



///SMAL IMAGES APPENDING
obj.images.map((item)=>{
let img1=document.createElement("img");
img1.src=item;
smallimg.append(img1)

img1.addEventListener("click",func);

function func(){
    img.src=item;
    imgs.append(img)
    //console.log("hrer")
}

})


/// STARS APPENDING
var rating = "";
        if(obj.rating < 3.8 && obj.rating >= 3.5)
            rating = `
            <span class="iconify" data-icon="openmoji:star"></span> 
            <span class="iconify" data-icon="openmoji:star"></span> 
            <span class="iconify" data-icon="openmoji:star"></span> 
            <span class="iconify" data-icon="openmoji:star-with-right-half-black"></span>  
            <span class="iconify" data-icon="openmoji:black-star"></span>`;
            
        else if(obj.rating < 4.3 && obj.rating >= 3.8)
            rating = `
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:black-star"></span>`;
            
        else if(obj.rating < 4.8 && obj.rating >= 4.3)
                rating = `
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star-with-right-half-black"></span>`;
            
        else if(obj.rating <= 5 && obj.rating >= 4.8)
                rating = `
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> `;
        
                rating+=` &nbsp;&nbsp; <span>(${obj.rating}/5)</span>`


let ratingdiv=document.getElementById("ratings")
ratingdiv.innerHTML=rating


// FOR SIZE APPENDING
let sizeFlag=false;
obj.size.map((item)=>{

let div=document.createElement("button");
div.setAttribute("class","sizetoggel")
div.textContent=item;
div.addEventListener("click" ,()=>{
    console.log(sizeFlag)
    if(sizeFlag==false){
        div.style.border="3px solid red"
        sizeFlag=true;

    }else{
        let sizeDiv=document.querySelectorAll(".sizetoggel");
        for(let i=0;i<sizeDiv.length;i++){
            sizeDiv[i].style.border="2px solid black"
        }
        div.style.border="3px solid red"

    }
    sizeAdded(item)
})
size.append(div)
})
document.getElementById("blow").addEventListener("click", blow);

//document.getElementById("heart").addEventListener("")

function blow(){
console.log(heartFlag)
if(heartFlag==false){

    heartFlag=true;
   // document.getElementById("heart").innerHTML=`<span id="heart" style="font-size: 47px;">&#x2764;</span>`
   // document.getElementById("heart").innerHTML=`<span class="iconify" data-icon="bi:heart"></span>`
   document.getElementById("blow").innerHTML=`<span class="iconify" data-icon="ant-design:heart-filled" style="font-size:40px; color : #3C3C3C;  margin-top: 10px;"></span>`
}else{
    //document.getElementById("blow").innerHTML=`<span id="heart" >&#x2661;</span>`
    document.getElementById("blow").innerHTML=`<span class="iconify" data-icon="ant-design:heart-outlined" style="font-size:40px; color: #3C3C3C; margin-top: 10px;"></span>`
    heartFlag=false;
}
}
let iitem={};
sizeAdded(obj.size[0]);
let userDetail=JSON.parse(localStorage.getItem("userDetail"));
//console.log(userDetail)
document.getElementById("addToCartBtn").addEventListener("click",()=>{

if(userDetail===null||userDetail.login===false){
    //console.log("heer")
    alert("you need to login first")
}else{

    iitem.email=userDetail.email;
    
    iitem.id=obj.id;
   
   
    
        //console.log()
        let itemflag=false;
        let cartArray=JSON.parse(localStorage.getItem("cartItem"))||[];
        console.log(iitem.size)
        for(let i=0;i<cartArray.length;i++){
            //console.log(cartArray[i].size)
            if(cartArray[i].id===obj.id&&cartArray[i].size===iitem.size&&cartArray[i].email===iitem.email){
                //console.log("HEre")
                itemflag=true;
                break;
            }
        }
        if(itemflag==true){
            alert("item Alredy added")
        }else{

            cartArray.push(iitem);
            localStorage.setItem("cartItem",JSON.stringify(cartArray));
        
        }
}
})
function sizeAdded(siz){
    
    iitem.size=siz;
}