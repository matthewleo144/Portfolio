const nav = document.querySelector(".circle-nav"),
toggleBtn = nav.querySelector(".toggle-btnn");
toggleBtn.addEventListener("click", ()=>{
    nav.classList.toggle("open");
    document.getElementById("mode-icon").classList.toggle("d-block");
    document.getElementById("mode-icon1").classList.toggle("d-none");
});

//drag
function onDrag({movementY}){
    const navStyle = window.getComputedStyle(nav),
            navTop = parseInt(navStyle.top),
            navHeight = parseInt(navStyle.height),
            windHeight = window.innerHeight;
    console.log(movementY);
    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if(navTop > windHeight - navHeight){
        nav.style.top = `${windHeight- navHeight}px`;
    }
    

}


// nav.addEventListener("mousedown",()=>{
//     nav.addEventListener("mousemove",onDrag);
// })
// nav.addEventListener("mouseup",()=>{
//     nav.removeEventListener("mousemove",onDrag);
// })
// nav.addEventListener("mouseleave",()=>{
//     nav.removeEventListener("mousemove",onDrag);
// })



