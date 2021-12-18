  // async function login() {
    //     let detail={
    //         username:document.getElementById("username").value,
    //         password:document.getElementById("password").value,
    //     }

    //     detail=JSON.stringify(detail);
    //     console.log(detail)
    //     let url=`https://masai-api-mocker.herokuapp.com/auth/login`

    //     let res=await fetch(url,{
    //         method:"POST",
    //         body:detail,
    //         headers:{

    //             "Content-Type":"application/json"
    //         },
    //     });

    //     let data=await res.json();
    //     let name=document.getElementById("username").value;

    //     console.log(data)
    //     if (data.error==false){
    //         userData(name,data.token)
    //        // window.location.href="sucs.html"
    //         //profileDetails(name,data.token)

    //     }else{
    //         document.getElementById("error").textContent=data.message;
    //     }
    // }
    // async function userData(name,token){
    //     console.log(name,token)
    //     let url=`https://masai-api-mocker.herokuapp.com/user/${name}`

    //     let res=await fetch(url,{
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization": `Bearer ${token}`
    //         },
    //     })

    //     let data= await res.json();

    //     //console.log(data)
    //     console.log(data)
    //     let username=data.name;
    //     let email=data.email;
    //     //console.log(username,email);
    //     let user={
    //         login:true,
    //         name:username,
    //         email:email
    //     }
    //     console.log(user)
    //     localStorage.setItem("userDetail",JSON.stringify(user))
    //     window.location.href="index.html"
    // }



    function login(){
        username=document.getElementById("username").value
        password=document.getElementById("password").value
        let flag=true;
        let userBag=JSON.parse(localStorage.getItem("userArray"));
        console.log(userBag);
        if(userBag.length==0){
            document.getElementById("error").textContent=`You need to SignUp first`
        }
        userBag.map((item)=>{
            if(item.username==username&&item.password==password){
                let user={
                    login:true,
                    name:item.name,
                    lastName: item.lastName,
                    email:item.email,
                }
                console.log(user)
                localStorage.setItem("userDetail",JSON.stringify(user))
                window.location.href="index.html"
                flag=false;
            }
        })
        if(flag==true){
            document.getElementById("error").textContent=`Invalid User credentials`
        }
    }