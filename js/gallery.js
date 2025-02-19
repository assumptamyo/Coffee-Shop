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