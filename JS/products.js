
    var productsContainer = document.getElementById("products-container");
var data = [];
var url = window.location.href;
console.log(url);
 var output= "";
 var flag = false;
 for(var i=url.length-1; i>=0 ;i--)
     {
         if(url[i] == "?")
         {
             flag = true
             break;
         }
         else
             output+=url[i];
     }
 output = output.split("").reverse().join("");
 console.log("search input passed by navbar page "+output);
 
if(flag)
{
    output = output.toLowerCase();

    var rawData = JSON.parse(localStorage.getItem("DotAndKeyProducts"));
    
   rawData.forEach(item => {
       if(item.title.toLowerCase().indexOf(output) != -1)
           data.push(item);
   })
   showData(data);
}
else
    data = JSON.parse(localStorage.getItem("DotAndKeyProducts"));
    //console.log(arr);



    // show data function will display the product on the web page
    showData(data); 
    function showData(data)
    {
        productsContainer.innerHTML = ""; 
        if(data.length == 0 || data==undefined || data == null)
        {
            productsContainer.innerHTML = `<hr><h2>NO Product Found for this serach !!!</h2><hr>`;
            productsContainer.style.display = "block";
            productsContainer.style.marginBottom = "100px";
            productsContainer.style.textAlign = "center";
        }
        else 
        {
        // changing the stars according to rating
        data.forEach(item => {
            var rating = "";
            if(item.rating < 3.8 && item.rating >= 3.5)
                rating = `
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star"></span> 
                <span class="iconify" data-icon="openmoji:star-with-right-half-black"></span>  
                <span class="iconify" data-icon="openmoji:black-star"></span>`;
                
            else if(item.rating < 4.3 && item.rating >= 3.8)
                rating = `
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:black-star"></span>`;
                
            else if(item.rating < 4.8 && item.rating >= 4.3)
                    rating = `
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star-with-right-half-black"></span>`;
                
            else if(item.rating <= 5 && item.rating >= 4.8)
                    rating = `
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> 
                    <span class="iconify" data-icon="openmoji:star"></span> `;

        // calculating sale price on the basis of Orignal price
        var x=Math.floor((item.discount/100)*item.price).toFixed(2);
        x=(item.price-x).toFixed(2);
        var orignalPrice;
        if(item.discount != 0)
        {
            orignalPrice = `Rs. ${item.price}`;
            var disc = `SAVE ${item.discount}%`;
        }
        else
        {
            orignalPrice = "";
            var disc = "";
        }
        // Appending all the product cards on the main div
            productsContainer.innerHTML += 
            `
            <div class="card">
           <div onclick="redirectToIndividualProductPage('${item.id}')"> 
            <img src="${item.images[0]}">
            <div class="description">
                <label class="rating">${rating} ${item.rating}/5</label>
                <p class="title">${item.title}</p>
                <p class="price"><span class="orignal-price">${orignalPrice}</span><span class="sale-price">Rs: ${x}</span></p>
            </div>
            <div class="discount">${disc}</div>
           </div>
           <button onclick="addToCart('${item.id}')">Add to Cart</button>
        </div>
            `
        });
    }
    }
// function to redirect the page to product details page
    function redirectToIndividualProductPage(id)
    {
        window.location.href = `productDetail.html?${id}`;
    }
    
    // Working on filteration and sorting
    var cate = document.getElementById("category-filter");
    cate.addEventListener("change", filter);
    var sorting = document.getElementById("sorting-filter")
    sorting.addEventListener("change", (sorting) =>{
        sortingFilter(sorting.value);
    });


    var filteredData = data;
    // Filter function will work according to passed product category
    function filter(e)
    {
        var category = e.target.value;
        // if user selects the default filter, genrate all products again
        if(category == "default")
        {
            filteredData = data;
            showData(data); 
        }
        // if user selects any specific product category, show the products of that category
        else
        {
                var temp = [];
                data.forEach(item => {
                if(item.category == category)
                    temp.push(item);
                })  
                filteredData = temp;
                var sortingTitle = document.getElementById("sorting-filter").value;
                if(sortingTitle != "defualt")
                    sortingFilter(sortingTitle)
                showData(filteredData);
        }      
    }
    // Sorting Filter 
    function sortingFilter(e)
    {
        var sortingTitle = e;
        // if user selects the default sorting, genrate all products again
        if(sortingTitle == "defualt")
        {
            filteredData = data;
            showData(data); 
        }
        // if user selects any specific sorting criteria, show the products in that order
        else
        {
            // sort by price low to high
                if(sorting.value == "price-low-high")
                {
                filteredData.sort(function (a,b)
                     {
                        return Math.floor(a.price-(a.price*a.discount/100)) - Math.floor(b.price-(b.price*b.discount/100));
                    });
                showData(filteredData);
                }
                
            // sort by price high to low
                else if(sorting.value == "price-high-low")
                {
                filteredData.sort(function (a,b)
                     {
                        return Math.floor(b.price-(b.price*b.discount/100)) - Math.floor(a.price-(a.price*a.discount/100));
                    });
                showData(filteredData);
                }
            // sort by rating low to high
                else if(sorting.value == "rating-low-high")
                {
                filteredData.sort(function (a,b)
                     {
                        return a.rating - b.rating; 
                    });
                showData(filteredData);
                }
                
            // sort by price high to low
                else if(sorting.value == "rating-high-low")
                {
                filteredData.sort(function (a,b)
                     {
                        return b.rating - a.rating; 
                    });
                showData(filteredData);
                }
                
            // sort by A-Z
                else if(sorting.value == "A-Z")
                {
                filteredData.sort(function (a,b)
                     {
                        return a.title.localeCompare(b.title);
                    });
                showData(filteredData);
                }
                // sort by Z-A
                else if(sorting.value == "Z-A")
                {
                filteredData.sort(function (a,b)
                     {
                        return b.title.localeCompare(a.title);
                    });
                showData(filteredData);
                }
        }   
    }

    // Add to cart functionality
let item={};
let userDetail=JSON.parse(localStorage.getItem("userDetail"));
function addToCart(id){

    console.log(id);
    if(userDetail==null || !(userDetail.login)){
        // alert("you need to login first")
        myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; You need to login first`, false);
    }else{
    
        item.email=userDetail.email;
        
        item.id=id;
        // Adding size as defualt value. Because product page has no option se select size;
        item.size = "Default";
        
            console.log()
            let itemflag=false;
            let cartArray=JSON.parse(localStorage.getItem("cartItem"))||[];
            console.log(cartArray.size)
            for(let i=0;i<cartArray.length;i++){
                if(cartArray[i].id===item.id&&cartArray[i].size===item.size&&cartArray[i].email===item.email){
                    //console.log("HEre")
                    itemflag=true;
                    break;
                }
            }
            if(itemflag==true){
                // alert("item Alredy added")
                myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; This item is already in cart`, false);
            }else{
                myFunction(`<span class="iconify" data-icon="teenyicons:tick-circle-solid" style="color: #3c763d; font-size: 22px;"></span> &nbsp; Item added to cart Successfully`, true);
                cartArray.push(item);
                localStorage.setItem("cartItem",JSON.stringify(cartArray));
            
            }
    }
}

// for pop up alert
function myFunction(msg, type) {
    var popup = document.getElementById("myPopup");
    popup.innerHTML = msg;
    if(type)
    {
        popup.style.color="#3C763D";
        popup.style.backgroundColor = "#DFF0D8"; 
        popup.style.border = "2px solid #3C763D";
    }
    else
    {
        popup.style.color="maroon";
        popup.style.backgroundColor = "#F2DEDE"; 
        popup.style.border = "2px solid maroon";
    }
    popup.classList.toggle("show");

    const myTimeout = setTimeout(myGreeting, 3000);
    
    function myGreeting() {
   popup.classList.toggle("show");
  }
    
  }
