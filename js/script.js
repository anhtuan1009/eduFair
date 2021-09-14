function showDropdownUser() {
    var x = document.getElementById("dropdown-user");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else { 
        x.className = x.className.replace(" show", "");
    }
};

// Start js team list page school-detail
$('#team_list .item-team').on("click", function(){

    if($(this).hasClass('active')) {
        // alert("You clicked a div with the class");
        $(this).removeClass('active');
        $('div.space-item-txt').remove();
    } else {
        // alert("You clicked a div without the class");

        var $this = $(this);
        var $idrel = $this.attr('rel');
        var $currentWidget = $('#' + $idrel);

        $this.addClass('active').siblings('#team_list .item-team').removeClass('active');


        var boxshowinfo = $(this).find('.item-txt');
        var h_boxshowinfo = boxshowinfo.outerHeight();

        if($(this).find('.space-item-txt').length !== 0) {
            //alert("I confirm, that child is within parent el");
        }else{

            // if (contains(parentEl, childEl)) {
            //     document.querySelector('#result').innerText = 'I confirm, that child is within parent el';
            // }



            $('div.space-item-txt').remove();
            space = '<div class="space-item-txt" style="height:' + h_boxshowinfo + 'px"></div>';

            $('#team_list .item-team.active .item-txt').after(space);
            $cspace = $('.space-item-txt');
            //alert("I confirm, that child not within parent el");
            
        }


    }
});

$('#team_list .item-team .close').on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).parents('.item-team').removeClass('active');
    $('div.space-item-txt').remove();
})

$('.item-txt').on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
})
// End js team list page school-detail


$(document).ready(function() {


    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
        else $('#goTop').fadeOut();
    });
    $('#goTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });


    $('a.scrollDiv').on('click', function(e){
        e.preventDefault();

        var id = $(this).attr('href');

        if($('.box-nav-top')) {
            $('html,body').animate({
                scrollTop: $(id).offset().top
            });
        }
    });


    $(".show_frmSearch").click(function(e){
        e.preventDefault();
        $("#timke").toggle();
    });
    $(".show_frmSearch2").click(function(e){
        e.preventDefault();
        $("#timke2").toggle();
    });




    var delay = ( function() {
      var timer = 0;
      return function(callback, ms) {
          clearTimeout (timer);
          timer = setTimeout(callback, ms);
      };
    })();

    $('a.parent').on("click", function(e){
        $(this).next('ul').toggle();
        $(this).children('span:first').toggleClass("icon-down-arrow icon-right-arrow");
        e.stopPropagation();
        e.preventDefault();
    });

    if($('.header.header-scroll')[0]){
		$('.header-scroll').before('<div class="space-header-fixed"></div>');
    };

	checkScroll();
	$(window).scroll(checkScroll);

});

$(window).resize(function () {
	checkScroll();
});

function checkScroll(){
    if($('.header.header-scroll')[0]){
        var menu_a = $('.menu-top').outerHeight();
        var menu_b = $('.space-header-fixed');
        var menu_c = $('.header.header-scroll');
        var h_menu_c = $('.header.header-scroll').outerHeight();
        var header_fixed = ($(this).scrollTop() >= 0);
        var btn_hide = $('#btn_click_hidden');
        if (header_fixed === true) {
            menu_b.height(h_menu_c);
            menu_c.addClass('header-fixed');
            btn_hide.show();
        } else {
            menu_b.height(0);
            menu_c.removeClass('header-fixed');
            btn_hide.hide();
        }
    };


    var total_scroll_height = document.body.scrollHeight;
    var inside_header = ($(this).scrollTop() <= 200);
    var passed_header = ($(this).scrollTop() >= 0);
    var passed_header2 = ($(this).scrollTop() >= 150);
    var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() + 300)));
    if (inside_header === true) {
        $('.store-product-button-fixed').removeClass('show-store-product-button');
        $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
    } else if (passed_header === true) {
        $('.store-product-button-fixed').addClass('show-store-product-button');
        $('.back-to-top-badge').addClass('back-to-top-badge-visible');
    }
    if (footer_reached == true) {
        $('.store-product-button-fixed').removeClass('show-store-product-button');
        $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
    }
}


jQuery(function($) {

    $('[data-toggle="tooltip"]').tooltip()


    $('#btn_click_hidden').on("click", function(z) {
        z.preventDefault();
        $('.header').removeClass('header-scroll');
        $('.header').removeClass('header-fixed');
        $('.space-header-fixed').css('display','none');
        $(this).hide();
    });

    $('.back-to-top-badge').on("click", function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.btn-collapse').on("click", function(e) {
        e.preventDefault();
        $('#box-collapse').toggle(300);
    });

    $(".table_sroll").niceScroll(".table_box_desc", {
        touchbehavior:!0,cursorcolor:"#DEDFE0",cursorwidth:"5px",cursorborder:"1px",zindex:"9",autohidemode: false
    });



    // Start js click showmore page school-detail/box intro
    if($('.check_height')[0]){
        var max_height = 254;
        var height_content_detail = $('.check_height').height();
        var btn_showmore = $('.btn-detail.showmore')
        var btn_showless = $('.btn-detail.showless')

        if(height_content_detail > max_height){
            $('.check_height').addClass('max_height_active');
            $('.detail_box').append('<span class="btn btn-xanh btn-detail showmore" id="btn_showmore">Xem chi tiết</span>');
        }

        $(".btn-detail").click(function(e){
            e.preventDefault();
            $(this).toggleClass('showless');
            $('.check_height').toggleClass('max_height_active');

            if (this.innerHTML === "Xem chi tiết") {
                this.innerHTML = "Thu gọn";
            } else {
                this.innerHTML = "Xem chi tiết";
            }
        });
    }
    // End js click showmore page school-detail/box intro



    var swiper1 = new Swiper('#slide_home', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        //lazy: true,
        speed: 1500,
        watchOverflow: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination-slide-home',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-slide-home',
            prevEl: '.swiper-button-prev-slide-home',
        },
        breakpoints: {
            992: {
                spaceBetween: 30,
            }
        }
    });

    var slide_sermina_2021 = new Swiper('#slide_sermina_2021', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        loop: false,
        loopFillGroupWithBlank: false,
        speed: 800,
        watchOverflow: true,
        pagination: {
            el: '.swiper-pagination-sermina-2021',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-sermina-2021',
            prevEl: '.swiper-button-prev-sermina-2021',
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            580: {
                slidesPerView: 2,
            },
            415: {
                slidesPerView: 1.4,
            },
            380: {
                slidesPerView: 1,
            }
        }
    });

    var swiper2 = new Swiper('#slide_sermina', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        speed: 800,
        watchOverflow: true,
        pagination: {
            el: '.swiper-pagination-sermina',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-sermina',
            prevEl: '.swiper-button-prev-sermina',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            580: {
                slidesPerView: 2,
            },
            415: {
                slidesPerView: 1.4,
                spaceBetween: 1,
            },
            380: {
                slidesPerView: 1,
            }
        }
    });

    var slide_news = new Swiper('#slide_news', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        loop: false,
        loopFillGroupWithBlank: false,
        speed: 800,
        watchOverflow: true,
        pagination: {
            el: '.swiper-pagination-slide-news',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-slide-news',
            prevEl: '.swiper-button-prev-slide-news',
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            580: {
                slidesPerView: 2,
            },
            415: {
                slidesPerView: 1.4,
                spaceBetween: 15,
            },
            380: {
                slidesPerView: 1,
            }
        }
    });

    slideSchool = document.getElementById('slide_university')
    var swiperSlideSchool = new Swiper(slideSchool, {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        speed: 800,
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
            el: '.swiper-pagination-university',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-university',
            prevEl: '.swiper-button-prev-university',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                speed: 1500,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                speed: 1500,
            }
        }
    });

    var swiper4 = new Swiper('#slide_tab_university', {
        slidesPerView: 1,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        loop: false,
        spaceBetween: 10,
        watchOverflow: true,
        speed: 800,
        pagination: {
            el: '.swiper-pagination-university-tab',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-university-tab',
            prevEl: '.swiper-button-prev-university-tab',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 1.4,
                spaceBetween: 15,
            },
            355: {
                slidesPerView: 1,
            }
        }

    });





    const breakpoint = window.matchMedia( '(max-width:575px)' );
    let swiper5;
    const enableSwiper = function() {

        jQuery(".schedule_wrapper_swiper").each(function(){

            var silderId = "#"+jQuery(this).attr("id");
            var section_w = "#" + jQuery(this).closest(".schedule_box").attr("id");

            swiper5 = new Swiper(silderId, {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: false,
                loopFillGroupWithBlank: true,
                watchOverflow: true,
                speed: 800,
                pagination: {
                    el: section_w + ' .swiper-pagination-schedule',
                    clickable: false,
                },
                navigation: {
                    nextEl: section_w + ' .swiper-button-next-schedule',
                    prevEl: section_w + ' .swiper-button-prev-schedule'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    0: {
                        slidesPerColumn: 3
                    }
                }

            });

        });

    }
    const breakpointChecker = function() {
        if ( breakpoint.matches === true ) {
           if ( swiper5 !== undefined ) swiper5.destroy( true, true );
           return;
        } else if ( breakpoint.matches === false ) {
           return enableSwiper();
        }
    };
    if($('.schedule_wrapper_swiper')[0]){
        breakpoint.addListener(breakpointChecker);
        breakpointChecker();
    }



    
    var swiper6 = new Swiper('#library_wrapper_library', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 10,
        loop: false,
        loopFillGroupWithBlank: false,
        watchOverflow: true,
        speed: 600,
        pagination: {
            el: '.swiper-pagination-library',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next-library',
            prevEl: '.swiper-button-prev-library'
        },
        breakpoints: {
            992: {
                slidesPerView: 4.2,
                slidesPerGroup: 4,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            420: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        }

    });

    // var swiper8 = new Swiper('#slide_list_cate_folder', {
    //     slidesPerView: 6,
    //     slidesPerColumn: 1,
    //     spaceBetween: 5,
    //     slidesPerGroup: 2,
    //     lazy: true,
    //     //loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //         el: '.swiper-pagination-list-sub-cate',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next-list-sub-cate',
    //         prevEl: '.swiper-button-prev-list-sub-cate',
    //     },
    //     breakpoints: {
    //         1400: {
    //             slidesPerView: 5,
    //         },
    //         1200: {
    //             slidesPerView: 4,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //         },
    //         580: {
    //             slidesPerView: 3,
    //             spaceBetween: 8,
    //         },
    //         355: {
    //             slidesPerView: 2,
    //             spaceBetween: 5,
    //         }
    //     }

    // });



    var vStatus = '';
    $('.cliVeo').click(function() {
        $('.item-video').removeClass('active');
        $(this).parent().addClass('active');
        var tit=$(this).attr('title');
        var url=$(this).attr('data-url');
        var url_vnexpress=url.includes("vnecdn.net");
        var url_facebook=url.includes("facebook.com");
        var url_youtube=url.includes("youtube.com");

        vStatus=$(this).attr('data-status');
        toggleClass= 'videoName '+vStatus;
        if(vStatus == 'live') {
            var title_new = '<span class="live">Live</span> <span>'+tit+'</span>';
            $('#captionVie').html(title_new);
        }else {
            var title_new = '<span>'+tit+'</span>';
            $('#captionVie').html(title_new);
        }
        $('#captionVie').attr('class', toggleClass);

        // Auto play video after click thumb
        if(url_vnexpress == true){
            $('#ifrLarger').attr('src',url+'?autoplay=1');
        }else if(url_youtube == true){
            $('#ifrLarger').attr('src',url+'?autoplay=1'); 
        }else if(url_facebook == true){
            $('#ifrLarger').attr('src',url+'&autoplay=1');
        }else {
            $('#ifrLarger').attr('src',url);
        }
        // Scroll wrap video show
        if($(".section-video-live-new")[0]){
            $('html,body').animate({
                scrollTop: $(".section-video-live-new").offset().top-80
            });
        }

    });
});

$(document).ready(function() {
        // Start scroll beauty table
        var tableh = document.querySelector('#js_table_scroll_h');
        var tablew = document.querySelector('#js_table_scroll_w');

        var scheduleh = document.querySelector('#library_wrapper_schedule_vertical');


        if($(tableh)[0] && $(tablew)[0]){
            var psh = new PerfectScrollbar(tableh);
            var psw = new PerfectScrollbar(tablew);
        }
        if($(scheduleh)[0]){
            var schedule_h = new PerfectScrollbar(scheduleh);
        }
        // End beauty table 
    
    // Start scroll cate
    var boxVideoThumbH = document.querySelector('.js_scroll_perfect');
    if($(boxVideoThumbH)[0]){
        const boxVideoThumb_H = new PerfectScrollbar(boxVideoThumbH);
    }
    // End scroll cate
});
