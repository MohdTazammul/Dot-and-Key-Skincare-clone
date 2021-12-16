
    var data = JSON.parse(localStorage.getItem("DotAndKeyProducts"));
    var productsContainer = document.getElementById("products-container");

    // show data function will display the product on the web page
    showData(data); 
    function showData(data)
    {
        productsContainer.innerHTML = ""; 
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
            orignalPrice = `Rs: ${item.price}`;
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
    if(userDetail===null){
        alert("you need to login first")
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
                alert("item Alredy added")
            }else{
    
                cartArray.push(item);
                localStorage.setItem("cartItem",JSON.stringify(cartArray));
            
            }
    }
}