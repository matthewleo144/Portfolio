$(".pricing-slide").slick({
    arrows:false,
    dots: true,
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
            breakpoint: 950,
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
    ]
});
$(window).on("load",function(){
$('.loader-container').fadeOut(500,function(){
$(this).remove();
});
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

// function showSlides(n) {
// var i;
// var slides = document.getElementsByClassName("mySlides");
// var dots = document.getElementsByClassName("dot");
// if (n > slides.length) {slideIndex = 1}    
// if (n < 1) {slideIndex = slides.length}
// for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
// }
// for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex-1].style.display = "block";  
// dots[slideIndex-1].className += " active";
// }


function dark() {
    document.querySelector('body').classList.add('dark-mode');
    document.querySelector('body').classList.remove('neon-mode');
    localStorage.setItem("data-theme", "dark");
}
function neon() {
    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body').classList.add('neon-mode');
    localStorage.setItem("data-theme", "neon");
}
       
        window.onload= function() {
            let theme_flag=localStorage.getItem("data-theme");
            if(theme_flag=="dark"){
                dark();
            }else if(theme_flag == "neon"){
                neon();
            }
        }







const show = document.querySelector('.show');
const mySlides = document.querySelector('.mySlides');
const btncancel = document.querySelector('.btn-cancel');
show.style.display = "none";

function showslider() {
show.style.display = "block";
}
show.addEventListener('click', function(){


})

btncancel.addEventListener('click', function(){
show.style.display = "none";
})




var slideIndex = 1;
function currentImageDisplay(position){
imageBox.style.background = `url(/ui ux projects/${currentImageIdx}/y.jpg) center/cover no-repeat`;
}