
var nav = document.querySelector(".active-nav");
var fix_navbar = document.querySelector(".fixed-navbar");


window.onscroll = () => {
    if (window.pageYOffset >= fix_navbar.offsetTop){
        nav.style="background-color: rgba(24, 5, 1, 0.9); box-shadow: 10px 10px 15px #333";
    }else{
        nav.style="background-color: none";
    }
}

var text = document.querySelector('.circle .rotate-text p');
text.innerHTML = text.innerText.split("").map((char,i) => `<span style="transform:rotate(${i*11.}deg)">${char}</span>`).join("")

$("#check-out-menu-btn").click(function(){
    $("html, body").animate( { scrollTop: $("#menu").offset().top} , 1200)
})

// scrollToTop
$('#scrollToTop').hide();
$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $('#scrollToTop').fadeIn(300);
    } else {
        $('#scrollToTop').fadeOut(300);
    }
})

$("#scrollToTop").bind("click",function() {
    $("html, body").animate({ scrollTop: 0 }, 1200);
    return false;
});
