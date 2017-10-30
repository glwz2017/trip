//入口
$(function () {
    var index=0;
    var timer=null;
    $('.banner>div').eq(0).fadeIn().siblings().fadeOut();
    function move(index) {
            $('.round>li').eq(index).css({backgroundColor:'red'}).siblings().css({backgroundColor:'orange'});
            $('.banner>div').eq(index).stop().fadeIn().siblings().stop().fadeOut();
    }
timer = setInterval(function () {
    index=index>$('.banner>div').length?0:index;
    move(index++);
},2000);
$('.banner-box').mouseenter(function () {
    clearInterval(timer);
});
 $('.banner-box').mouseleave(function () {
     timer = setInterval(function () {
         index=index>$('.banner>div').length?0:index;
         move(index++);
     },2000);
 });
$('.round>li').mouseenter(function () {
    var i=$(this).index();
move(index=i);
});
    $('.news-box>li').mouseenter(function () {
        $('.news-box>li').eq($(this).index()).css({ borderTop:' 2px solid #00925f',backgroundColor:'#f6f6f6'}).siblings().css({ borderTop:' 2px solid transparent',backgroundColor:'#dadada'});
        console.log($(this).index());
    });
//获取
    $('.news-box>li').eq(0).mouseenter(function () {
        $('.news-content').css({display:'block'});
        $('.weibo-content').css({display:'none'});
    });
    $('.news-box>li').eq(1).mouseenter(function () {
        $('.weibo-content').css({display:'block'});
        $('.news-content').css({display:'none'});
    });
//

});//结尾