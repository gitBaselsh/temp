






$(document).ready(function(){

$(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");




    }else{
        $('.navbar').removeClass("sticky");
    }
    if(this.scroll > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
    // slide.up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    })
});
// tolggle menu/navbar secript/
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
// tybeing scribt inamtion
var typed = new Typed(".typing",{
    strings: ["Programming","Graduation Projects","Educational courses","griffix designs","Managing social media pages"],
    typeSpeed:100,
    backSpeed:60,
    loop:true



});
var typed = new Typed(".typing-2",{
    strings: ["technology","and university","or learning"],
    typeSpeed:100,
    backSpeed:60,
    loop:true



})

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut:2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav:false
        },
        600:{
            items: 2,
            nav:false
        },
        1000:{
            items: 3,
            nav:false
        }
    }

});

});

// normal page clic
let cli=document.getElementById("go").onclick=function(){
    alert("Sorry, the home page is under maintenance and soon it will be in service")
}