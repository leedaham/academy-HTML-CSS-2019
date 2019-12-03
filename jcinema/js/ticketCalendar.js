/*
            날짜: 2018-12-02
            이름: 이다함
            내용: 예매하기 날짜 출력
        */

$(document).ready(function(){

    var $year = $('.calendar .year');
    var $month = $('.calendar .month');
    var $a = $('.calendar a');

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var today = d.getDate();
    var day = d.getDay();

    var monthNames = ['January', 'Feburuary', 'March', 'Aprill', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var week = ['일', '월', '화', '수', '목', '금', '토'];

    // 오늘 년원일 출력
    $year.text(year+' '+monthNames[month]);
    $month.text(month+1);

    // 현재 월의 첫번째 날과 마지막 날짜 구하기
    var firstDate = new Date(year, d.getMonth(), 1);
    var lastDate = new Date(year, d.getMonth()+1, 0);

    // 요일, 날짜 출력하기
    $a.each(function(){

        if(day == 7){
            day = 0;
        }

        var week_name = week[day++];

        $(this).children().first().text(week_name);

        if(week_name == '토'){
            $(this).parent().removeClass().addClass('sat');
        }else if(week_name == '일'){
            $(this).parent().removeClass().addClass('sun');
        }else{
            $(this).parent().removeClass().addClass('day');
        }

        

        if(today > lastDate.getDate()){
            today = 1;
        }

        $(this).children().last().text(today++);
        $a.eq(0).parent().addClass('on');

        

    });




});
