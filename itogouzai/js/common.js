/**
 * common.js
 *
 *  version --- 1.0
 *  updated --- 2017/11/30
 */


/* !stack ------------------------------------------------------------------- */
jQuery(document).ready(function ($) {
    var os = function () {
        var ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
        };
    }();
    if (os.isAndroid || os.isPhone) {
        $('head').append('<meta name="viewport" content="width=375,user-scalable=no">');
    } else if (os.isTablet) {
        $('head').append('<meta name="viewport" content="width=1480,user-scalable=no">');
		$('body').addClass('isTablet');
    } else if (os.isPc) {
        $('head').append('<meta name="viewport" content="width=device-width,user-scalable=no">');
    }
});

/* !isUA -------------------------------------------------------------------- */
var isUA = (function () {
    var ua = navigator.userAgent.toLowerCase();
    indexOfKey = function (key) {
        return (ua.indexOf(key) != -1) ? true : false;
    }
    var o = {};
    o.ie = function () {
        return indexOfKey("msie");
    }
    o.fx = function () {
        return indexOfKey("firefox");
    }
    o.chrome = function () {
        return indexOfKey("chrome");
    }
    o.opera = function () {
        return indexOfKey("opera");
    }
    o.android = function () {
        return indexOfKey("android");
    }
    o.ipad = function () {
        return indexOfKey("ipad");
    }
    o.ipod = function () {
        return indexOfKey("ipod");
    }
    o.iphone = function () {
        return indexOfKey("iphone");
    }
    return o;
})();


$(function () {
    var scrollTop = 0;
    $(".btnMenu").click(function () {
        if ($(".btnMenu").hasClass('active')) {
            $("#gNavi,.overlay").stop().fadeOut(200);
            $(".btnMenu").removeClass('active');
            $('body').removeClass('menuOpen');
            scrollTop = $('#wrapper').css('top');
            $(window).scrollTop(-parseInt(scrollTop));
            $('#wrapper').css('top', '0');
        } else {
            $("#gNavi,.overlay").stop().fadeIn(200);
            $(".btnMenu").addClass('active');
            $('body').addClass('menuOpen');
            $('#wrapper').css('top', -scrollTop + 'px');
        }
    });
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
    });
    $(window).resize(function () {
        setTimeout(function () {
            if ($(window).width() > 767) {
                $("#gNavi,.overlay,#wrapper").attr("style", "");
                $(".btnMenu").removeClass("active");
                $('body').removeClass('menuOpen');
            }
        }, 500);
    });
    $('.pageTop a').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow', 'swing');
        return false;
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $('.pageTop').fadeIn();
        }else{
            $('.pageTop').fadeOut();
        }
    });

    $('.biggerlink').biggerlink();

    $('.bgImg').each(function () {
        $(this).css({
            backgroundImage: 'url(' + $(this).data('bg') + ')'
        });
    });

});

$(window).on('load resize', function () {
    $('a.scroll, .scroll a').each(function () {
        $(this).unbind('click').bind("click keypress", function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            var targetY = $(target).offset().top;
            var parent = (isUA.opera()) ? (document.compatMode == 'BackCompat') ? 'body' : 'html' : 'html,body';
            $(parent).animate({
                    scrollTop: targetY
                },
                400
            );  
            if ($(window).width() < 767) {
				$('body').removeClass('menuOpen');
				$("#gNavi").stop().fadeOut(200);
				$(".btnMenu").removeClass('active');
			};
            return false;
        });
    });
});

