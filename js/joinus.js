let JoinUs = document.querySelectorAll(".register_btn"),
    Cntshow = document.querySelector(".cnt_join"),
    loginForm = document.querySelector(".login"),
    registerForm = document.querySelector(".register"),
    loginBtn = document.querySelector(".login_btn"),
    closeBtn = document.querySelector(".closeform");
    




for(i=0;i<JoinUs.length;i++){
    JoinUs[i].onclick= function(){
        Cntshow.style.display = "flex";
        loginForm.style.display = "none";
        registerForm.style.display ="initial";
        return false;
    }
}

loginBtn.onclick = function(){
    Cntshow.style.display = "flex";
    loginForm.style.display = "initial";
    registerForm.style.display ="none";

    return false;
}

closeBtn.onclick = function(){
    Cntshow.style.display = "none";
}