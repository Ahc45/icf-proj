jQuery(document).ready(function ($) {

    var icf = {
        init: function () {
            this.fullpage.callActions()
            this.svgRenderData.callActions()
            this.matchHeight()
            this.windowChange()
            this.section.callActions()
            this.Navigator()
        },
        Navigator: function () {
            if ($(window).width() < 768) {
                $('#my-m-nav').removeClass('hide')
            }
            $('#my-m-nav').on('click', function () {

                if ($(this).hasClass("open")) {
                    $(this).removeClass("open")
                    $('.nav-mobile-wrapper').css("right", "-100%")
                } else {
                    $(this).addClass("open")
                    $('.nav-mobile-wrapper').css("right", 0)
                }
            });
        },
        section: {
            callActions: function () {
                this.sethoverSvg()
            },
            sethoverSvg: function () {
                $('#recent_news').hover(function () {
                    $('#recent_news_wraper').removeClass("hide");
                });
                $('#recent_news').mouseleave(function () {

                    $('#recent_news_wraper').addClass("hide");
                })
                $('#stock_info').hover(function () {
                    $('#stock_info_wraper').removeClass("hide");
                });
                $('#stock_info').mouseleave(function () {

                    $('#stock_info_wraper').addClass("hide");
                })
                $('#upcomming_events').hover(function () {
                    $('#upcomming_events_wraper').removeClass("hide");
                });
                $('#upcomming_events').mouseleave(function () {

                    $('#upcomming_events_wraper').addClass("hide");
                })
                $('#web_casts').hover(function () {
                    $('#web_casts_wraper').removeClass("hide");
                });
                $('#web_casts').mouseleave(function () {

                    $('#web_casts_wraper').addClass("hide");
                })
                $('#selected_fillings').hover(function () {
                    $('#selected_fillings_wrapper').removeClass("hide");
                });
                $('#selected_fillings').mouseleave(function () {
                    $('#selected_fillings_wrapper').addClass("hide");
                })
            }
        },
        fullpage: {
            callActions: function () {
                this.initialize()
            },
            initialize: function () {
                if ($(window).width() > 768) {
                    var myFullpage = new fullpage('#fullpage', {
                        lazyLoad: true,
                        navigation: true,
                        autoScrolling: false,
                    });
                }
            },

        },
        windowChange: function () {
            $(window).resize(function () {
                if ($.fn.fullPage) {
                    $.fn.fullpage.destroy();
                }
                if ($(window).width() > 768) {
                    icf.fullpage.initialize()
                }
            });
        },
        windowsScale: {
            height: $(window).height(),
            width: $(window).width()
        },
        svgRenderData: {
            callActions: function () {
                this.render()
            },
            render: function () {
            }
        },
        matchHeight: function () {
            if ($(".mh-0").length != 0) {
                $(".mh-0").matchHeight();
            }
            if ($(".mh-1").length != 0) {
                console.log("match height")
                $(".mh-1").matchHeight();
            }
            if ($(".mh-2").length != 0) {
                $(".mh-2").matchHeight();
            }
            if ($(".module-list-item").length != 0) {
                $(".module-list-item").matchHeight();
            }
        },
    }
    icf.init()
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("nav.my-nav").style.top = "0";
            if ($(window).width() > 768) {
                $('#my-m-nav').addClass('hide');
            }
        } else {
            document.querySelector("nav.my-nav").style.top = "-500px";
            $('#my-m-nav').removeClass('hide');
        }
        prevScrollpos = currentScrollPos;
    }
});