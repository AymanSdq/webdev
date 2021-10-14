

let togglebtn = document.querySelector('.toggle'),
    navbar = document.querySelector('.link_header');


togglebtn.onclick=function(){

    navbar.classList.toggle('visible');

    if(navbar.classList.contains('visible')){
        togglebtn.classList.add('fa-times');
    }else{
        togglebtn.classList.remove('fa-times');
    }

}



