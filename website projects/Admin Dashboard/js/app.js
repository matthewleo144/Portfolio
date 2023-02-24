$(".showsidebarbtn").click(function(){
    $(".sidebar").animate({marginLeft:0});
})
$(".hidesidebarbtn").click(function(){
    $(".sidebar").animate({marginLeft:"-100%"});
})
function go(url){
    setTimeout(function(){
        location.href = `${url}`;
    },500)
}

$(function () {
    $('[data-toggle="popover"]').popover()
  })
$(".full-screen-btn").click(function(){
    let current = $(this).closest(".card");
    current.toggleClass("full-screen-card");
    if(current.hasClass("full-screen-card")){
        $(this).html(`<i class="feather-minimize-2"></i>`);
    }else{
        $(this).html(`<i class="feather-maximize-2"></i>`);
    }
});
$(document).ready(function() {
    $('#example').DataTable();
} );
let screenheight =$(window).height();
let currentheight =$(".nav-menu .active").offset().top;

if(currentheight> screenheight*0.8){
    $(".sidebar").animate({
        scrollTop:currentheight-200
        },1000)
}