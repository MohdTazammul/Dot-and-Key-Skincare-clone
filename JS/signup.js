   //     async function Register() {
    //     let url=`https://masai-api-mocker.herokuapp.com/auth/register`
    //     let detail={
    //         name:document.getElementById("name").value,
    //         email:document.getElementById("email").value,
    //         password:document.getElementById("password").value,
    //         username:document.getElementById("email").value,
    //         mobile:" ",
    //         description:" "
    //     };
    //     console.log(detail)
    //     detail=JSON.stringify(detail)

    //     let res= await fetch(url,{
    //         method:"POST",

    //         body:detail,

    //         headers:{
    //             "Content-Type":"application/json"
    //         },



    //     });

    //     let data=await res.json();

    //     console.log(data)
    //     if(data.error==false){

    //         window.location.href="login.html";
    //     }else{
    //             document.getElementById("error").textContent=data.message;
    //     }
    // }



    function Register(){
        let detail={
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value,
                username:document.getElementById("email").value,
                mobile:" ",
                description:" "
            };
            console.log(detail)
    
            let userBag=JSON.parse(localStorage.getItem("userArray"))||[];
            userBag.push(detail);
            localStorage.setItem("userArray",JSON.stringify(userBag));
            window.location.href="login.html"
    }
    