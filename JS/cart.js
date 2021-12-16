let quentityArray;
let user=JSON.parse( localStorage.getItem("userDetail"));
console.log(user)
//let user=JSON.parse( localStorage.getItem("userDetail"));
if(user==null||user.login==false){
    window.location.href="login.html"
}

let cartProduct=document.getElementById("cart-product")
// let prodBag=JSON.parse(localStorage.getItem("DotAndKeyProducts"));
 let prodBag=JSON.parse(localStorage.getItem("DotAndKeyProducts"));

// let cartBag=JSON.parse(localStorage.getItem("cartItem"));
let cartBag=JSON.parse(localStorage.getItem("cartItem"))||[];
showItem()

function showItem(){
     cartBag=JSON.parse(localStorage.getItem("cartItem"))||[];

    let quantityArray;
    let indexCount=0;
    let totalAmount=0;
    cartProduct.innerHTML="";

    //console.log(cartBag)
    let userCart=[];
    cartBag.forEach((el)=>{
        if(user.email===el.email){
            userCart.push(el)
        }
    })
    if(userCart.length==0){
        cartProduct.innerHTML=`<h2>Nothing found in cart bag</h2>`
    }else{
        //console.log(user.email)
         quentityArray=[...Array(userCart.length).fill(1)]
        //console.log(quentityArray)
        userCart.map((item,index)=>{
            
            //console.log(item)
            if(user.email===item.email){
                
                let prod=prodBag.filter((el)=>{
                    if(item.id===el.id){
                        return true;
                    }
                })
                //console.log(prod)
                let div=document.createElement("div");
                let imgDiv=document.createElement("div");
                let titleBtnDiv=document.createElement("div");
                titleBtnDiv.setAttribute("id","title-btn")
                
        
                let img=document.createElement("img");
                img.src=prod[0].images[0];
                imgDiv.append(img)
        
                let title=document.createElement("h4");
                title.setAttribute("class","tttt")
                title.textContent=prod[0].title;
        
                let remBtn=document.createElement("button");
                remBtn.textContent="Remove"
                remBtn.addEventListener("click",()=>{
                    //console.log(index)
                    cartBag.splice(index,1);
                    localStorage.setItem("cartItem",JSON.stringify(cartBag));
                    showItem();

                })
                titleBtnDiv.append(title,remBtn);
        
                let QuentityDiv=document.createElement("div")
                QuentityDiv.setAttribute("id","quentity")
                let queInput=document.createElement("input");
                queInput.setAttribute("class","inputnum")
                console.log(item.quantity,item)
                if(item.quantity==undefined||item.quantity==null){

                    queInput.value=1;
                }else{
                    queInput.value=item.quantity;
                }

                
                queInput.type="Number"
                QuentityDiv.append(queInput);
                let span=document.createElement("span")
                span.textContent=indexCount;
                //span.style.Display="none";
                queInput.addEventListener("blur",(e)=>{
                    let num=e.target.value;
                    num=+num
                    let indexingofitem=e.target.parentNode.nextSibling.textContent;
                    // indexingofitem=+indexingofitem;
                    console.log(indexingofitem)
                    //console.log(indexingofitem)
                    // let num=document.querySelector(".inputnum").value;
                    // console.log(num)
                    quentityArray[indexingofitem]=num
                    //console.log(indexingofitem)
                    //console.log(num)
                    let x=Math.floor((prod[0].discount/100)*prod[0].price)
                    x=prod[0].price-x;
                    let y=x;
                    x=x*num;
                    totalAmount+=x-y;

                    x=x.toFixed(2)
                    //console.log(x,y)
                    //console.log(x)
                    amountDiv.textContent=`RS- ${x}`;
                    //subtotal(userCart ,index,num);
                    document.getElementById("subtotal").textContent=`Rs. ${totalAmount.toFixed(2)}`
                    item.quantity=num;
                    quantityAdder();
                })
        
                let amountDiv=document.createElement("div");
                amountDiv.setAttribute("id","amount")
                let x=Math.floor((prod[0].discount/100)*prod[0].price)
                x=prod[0].price-x;
                if(item.quantity){
                    x=x*item.quantity;
                }
                totalAmount+=x;
                x=x.toFixed(2)
                //console.log(x)
                amountDiv.textContent=`RS- ${x}`;
        
        
                div.append(imgDiv,titleBtnDiv,QuentityDiv,span,amountDiv)
                cartProduct.append(div)
            }
            indexCount+=1;
        })
        //quantityAdder();
        //totalAmount=totalAmount.toFixed(2)
    document.getElementById("subtotal").textContent=`Rs. ${totalAmount.toFixed(2)}`
        
    }
function quantityAdder(){

userCart.map((el,index)=>{
    el.quantity=quentityArray[index]
})

localStorage.setItem("cartItem",JSON.stringify(userCart))
console.log(userCart)
}

}

document.getElementById("checkout").addEventListener("click",()=>{
    window.location.href="checkout.html"
})

