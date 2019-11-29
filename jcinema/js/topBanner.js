$(document).ready(function(){

    var topBanner = $('#top-banner');
    var topBannerClose = $('#top-banner .close');
    var topBannerImg = $('#topBannerImg');

    // 상단 배너광고 닫기
    topBannerClose.click(function(e){
        e.preventDefault();
        topBanner.slideUp(300);
    });

    // 상단 배너광고 랜덤 출력
    var rand = Math.ceil(Math.random()*6);
    var imgPath = "./img/top_banner_poster"+rand+".jpg";
    
    topBannerImg.attr('src', imgPath);

    // 상단 배너광고 배경색 지정
    var ctx = document.getElementById('canvas').getContext('2d');
    var img = document.getElementById('topBannerImg');

    if(img.complete){
        drawBackground();
    }else{
        img.onload = drawBackground;
    }

    function drawBackground(){
        ctx.drawImage(img, 0, 0);
        var pixel = ctx.getImageData(0, 0, 1, 1).data;
        var rgb = 'rgb('+pixel[0]+', '+pixel[1]+', '+pixel[2]+')';

        topBanner.css('background-color', rgb);
    }


});