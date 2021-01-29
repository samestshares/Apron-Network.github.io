new WOW({
    resetAnimation: false
}).init();
$(function() {
    //创建案件历史
    // $(".fishBone").fishBone();

    var item = $(".fishBone .bd .item");
    var marginleft = parseInt(item.css('margin-left'));

    var item_w = item.width() + marginleft;


    var bd_w = Math.ceil($(".fishBone .bd").width());

    var rowcount = parseInt(bd_w / item_w);


    if (rowcount > item.length) {
        $(".fishBone .prev,.fishBone .next").hide()
    }

    var item_w_temp = Math.ceil(bd_w / rowcount - marginleft);
    item.width(item_w_temp);



    $('.prev').click(function () {
        let bdWidth = $('.bd ul').css("left");
        let ulWidth = $('.bd ul').css("width");
        let leftWidth = parseInt(bdWidth) &&  Math.abs(parseInt(bdWidth))>marginleft ?  parseInt(bdWidth) +bd_w +marginleft: bd_w-parseInt(ulWidth);
        if(Math.ceil(item.length/rowcount) == 2){
            leftWidth = leftWidth>parseInt(bdWidth)?0:leftWidth
        }

        console.log( Math.abs(parseInt(bdWidth)),marginleft,bd_w-parseInt(ulWidth),bd_w,leftWidth )
        $('.bd ul:not(:animated)').animate({left:leftWidth+'px'});
    });
    $('.next').click(function () {
        let bdWidth = $('.bd ul').css("left");
        let ulWidth = $('.bd ul ').css("width");
        let leftWidth = parseInt(ulWidth) < Math.abs(parseInt(bdWidth) -bd_w) + marginleft ? 0 : parseInt(bdWidth) -bd_w- marginleft;
        $('.bd ul:not(:animated)').animate({left:leftWidth+'px'},1000);


    });
});



