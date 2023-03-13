$("#sec-1").click(function(){
    $('html,body').animate({
        scrollTop:$("#one").offset().top -50
    },1000);
    return false
})
$("#sec-2").click(function(){
    $('html,body').animate({
        scrollTop:$("#two").offset().top -0
    },1000);
    return false
})
$("#sec-3").click(function(){
    $('html,body').animate({
        scrollTop:$("#three").offset().top -50
    },1000);
    return false
})
$("#sec-4").click(function(){
    $('html,body').animate({
        scrollTop:$("#four").offset().top -100
    },1000);
    return false
})