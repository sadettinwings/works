

$(window).load(function () {
    videoCallBack();
    var today = new Date();
    if ($(".datepicker").length > 0) {
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd = '0'+ dd
        } 
        if(mm<10) {
            mm = '0'+ mm
        } 
        $(".datepicker").val(dd + '.' + mm + '.' + yyyy);
    }
    if ($(".timepicker").length > 0) {
        var hour = today.getHours();
        var minute = today.getMinutes();
        var minuteInt = parseInt(minute);
        if (minuteInt < 10) {
            minuteInt = "0" + minuteInt;
        }
        $(".timepicker").val(hour  + ":" + minuteInt);
    }
});

function videoCallBack() {
    $(".autoPlayVideo").html('');
    var genislik = $(window).width();
    if (genislik > 768) {
        $(".autoPlayVideo").html('<video preload="auto" autoplay muted loop playsInline>' + '<source src="uploads/video/slider_video.mp4" type="video/mp4">' + '<source src="uploads/video/slider_video.WEBM" type="video/webm">' + '<source src="uploads/video/slider_video.ogg" type="video/ogg">' + '</div>');
    } else {
        $(".autoPlayVideo").html('<video preload="auto" autoplay muted loop playsInline>' + '<source src="uploads/video/slider_video_mobil.mp4" type="video/mp4">' + '<source src="uploads/video/slider_video_mobil.WEBM" type="video/webm">' + '<source src="uploads/video/slider_video_mobil.ogg" type="video/ogg">' + '</div>');
    }
}

$(document).ready(function () {
    $("#mobileMenuBtn").click(function () {
        $(this).toggleClass("active");
        $('body').toggleClass("noScroll");
        $('#mobileMenu').fadeToggle();
    });
    if ($(".photoGallery").length > 0) {
        $(".photoGallery").lightGallery({
            selector: 'a',
            fullScreen: true,
            thumbnail: true
        });
        $(".photoGallery").on('onCloseAfter.lg',function(event){
            $("#detailGallery").hide();
        }); 
    }

    if ($(window).width() <= 768) {
    $("a").each(function(index) {
        if ($(this).attr("href") == "menu.pdf" || $(this).attr("href") == "./sarap.pdf") {
            $(this).attr("target", "_blank");
            $(this).attr("data-fancybox", null);
        }
    });
}
});

if ($(".datepicker").length > 0) {
    $(function () {
        $(".datepicker").datepicker();
    });
    (function () {
        var elem = document.createElement('input');
        elem.setAttribute('type', 'text');

        if (elem.type === 'text') {
            $('.datepicker').datepicker({
                dateFormat: 'dd.mm.yy',
                minDate: +0,
                selectWeek: true,
                rangeSelect: true
            });
        }
    })();
}

if ($(".timepicker").length > 0) {
    $('.timepicker').clockpicker({
        placement: 'bottom',
        align: 'right',
        autoclose: true,
        'default': 'now'
    });
}

var id = $(".map").data('id');
var lat = $(".map").data('lat');
var lng = $(".map").data('lng');

if(typeof ymaps!="undefined"){
    ymaps.ready(function () {
        var myMap = new ymaps.Map(document.getElementById(id), {
            center: [lat, lng],
            zoom: 9
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconImageHref: 'img/map_icon.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
    });
}

