let theme_flag;
$(document).ready(function(){
    let screenHeight = $(window).height();
    // console.log(screenHeight);
    $(window).scroll(function(){
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        $(".site-nav").addClass("site-nav-scroll");
            setActive("home");
            navScroll();
            if(currentPosition > screenHeight){
                $('#up').fadeIn();
                } else{
                $('#up').fadeOut();
                }
    });

    theme_flag = localStorage.getItem("data-theme");
    if(theme_flag == "dark"){
        window.onload = dark();
    }else if(theme_flag =="neon"){
        window.onload = neon();
    }else if(theme_flag =="light"){
        window.onload = light();
    } 
});


function setActive(current){
    $(".nav-link").removeClass("current-section");
    $(`.nav-link[href='#${current}']`).addClass('current-section');
    $(".nav__link").removeClass("current-active");
    $(`.nav__link[href='#${current}']`).addClass('current-active');
}




function navScroll(){
    let currentSection = $("section[id]");
    currentSection.waypoint(function(direction){
        if(direction=="down"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }
    },{offset:'150px'});
    currentSection.waypoint(function(direction){
        if(direction=="up"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId);
        }
    },{offset:'150px'});
}




new WOW().init();
$(window).on("load",function(){
    $('.loader-container').fadeOut(600,function(){
        $(this).remove();
    });
});

// $(document).ready(function(){
//     setTimeOut(()=> {
//     $('.loader-container').remove();
//     } , 5000); // after 5 sec it will remove.
//     });
// $(function(){
//     $('.counter-up').counterUp({
//         dealay:10,time:1500,
//     });
// });

let pg = $('#skill').waypoint(function(){
    $(".progress-circle").addClass("progress-circle-animate")
    // $(".progress-circle").counterUp({
    //     delay:20,
    //     time:1000
    // });
},{
    offset:'20%'
})
$('.review-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ] 
    });

function dark() {
        document.querySelector('body').classList.add('dark-mode');
        document.querySelector('body').classList.remove('neon-mode');
        localStorage.setItem("data-theme", "dark");
    if(document.getElementById("checker2").checked = true){
        document.getElementById("checker3").checked = false;
        document.getElementById("checker1").checked = false;
    }else{
        
    }
}
function neon() {
    document.querySelector('body').classList.add('neon-mode');
        document.querySelector('body').classList.remove('dark-mode');
        localStorage.setItem("data-theme", "neon");
    if(document.getElementById("checker3").checked = true){
        document.getElementById("checker2").checked = false;
        document.getElementById("checker1").checked = false;
    }else{
    }
}
function light() {
    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body').classList.remove('neon-mode');
    localStorage.setItem("data-theme", "light");
    if(document.getElementById("checker1").checked = true){
        document.getElementById("checker3").checked = false;
        document.getElementById("checker2").checked = false;
    }
}

// for side nav

//for third side nav

// for side nav


















document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".sidebar");

    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
        hambugerline2Tag.classList.remove("hideline2");
        hambugerline1Tag.classList.remove("rotateplus45");
        hambugerline3Tag.classList.remove("rotateminus45");
        hamburgerMenuTag.classList.remove("isopened")
    });
});



const OverlayMenuTag = document.querySelector(".OverlayMenu");
const hamburgerMenuTag = document.querySelector(".hamburgerMenu");
const hambugerline1Tag = document.querySelector(".line1");
const hambugerline2Tag = document.querySelector(".line2");
const hambugerline3Tag = document.querySelector(".line3");
const liTag = document.getElementsByTagName("li");

hamburgerMenuTag.addEventListener("click",() =>{
    if(hamburgerMenuTag.classList.contains("isopened")){
        OverlayMenuTag.classList.remove("Showoverlaymenu","nav--open");
        hambugerline2Tag.classList.remove("hideline2");
        hambugerline1Tag.classList.remove("rotateplus45");
        hambugerline3Tag.classList.remove("rotateminus45");
        hamburgerMenuTag.classList.remove("isopened");
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.remove("liTagup");
        };
    }else {
        OverlayMenuTag.classList.add("Showoverlaymenu","nav--open");
        hambugerline2Tag.classList.add("hideline2");
        hambugerline1Tag.classList.add("rotateplus45");
        hambugerline3Tag.classList.add("rotateminus45");
        hamburgerMenuTag.classList.add("isopened");
        for (let i = 0; i < liTag.length; i++) {
            liTag[i].classList.add("liTagup");
        };
    }
})



