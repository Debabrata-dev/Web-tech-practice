function login(){
    let username=document.querySelector("#username").value
    let password=document.querySelector("#password").value

    if(username=="Jack" && password=="9745"){
        alert("login success");
    }
    else{
        alert("Login Error");
    }
}