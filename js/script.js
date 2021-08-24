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
                slidesPerView: 1.25,
                spaceBetween: 30,
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
        spaceBetween: 15,
        loop: true,
        loopFillGroupWithBlank: false,
        speed: 800,
        pagination: {
            el: '.swiper-pagination-university',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-university',
            prevEl: '.swiper-button-prev-university',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 28,
                speed: 1500,
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 20,
                speed: 1000,
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


});


var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

$(document).ready(function() {
        // Start scroll beauty table
        const tableh = document.querySelector('#js_table_scroll_h');
        const tablew = document.querySelector('#js_table_scroll_w');

        const scheduleh = document.querySelector('#library_wrapper_schedule_vertical');


        if($(tableh)[0] && $(tablew)[0]){
            const psh = new PerfectScrollbar(tableh);
            const psw = new PerfectScrollbar(tablew);
        }
        if($(scheduleh)[0]){
            const schedule_h = new PerfectScrollbar(scheduleh);
            console.log('fjdjfn');
        }
        // End beauty table 
});
