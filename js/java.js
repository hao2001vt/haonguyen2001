var navbar=document.querySelector('.navbar__wrap');

window.addEventListener('scroll',function(){
    var scrollY=window.scrollY;
    if(scrollY>700){
        navbar.style.position='fixed';
    }
    if(scrollY<700){
        navbar.style.position='unset';
    }
})