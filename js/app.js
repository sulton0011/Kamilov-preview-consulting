"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* ^^^
 * ========================================================================== */

/**
  *
  * @param {String} name
  * @param {Object} opts
  *
  * @example
  * getSVGSpriteIcon('some-icon', {
  *   tag: 'div',
  *   type: 'icons', 
  *   class: '', 
  *   mode: 'inline', 
  *   url: '', 
  * });
  */
function getSVGSpriteIcon(name, opts) {
  opts = _extends({
    tag: 'div',
    type: 'icons',
    "class": '',
    mode: 'inline',
    url: ''
  }, opts);
  var external = '';
  var typeClass = '';

  if (opts.mode === 'external') {
    external = "".concat(opts.url, "/sprite.").concat(opts.type, ".svg");
  }

  if (opts.type !== 'icons') {
    typeClass = " svg-icon--".concat(opts.type);
  }

  opts["class"] = opts["class"] ? " ".concat(opts["class"]) : '';
  return "\n    <".concat(opts.tag, " class=\"svg-icon svg-icon--").concat(name).concat(typeClass).concat(opts["class"], "\" aria-hidden=\"true\" focusable=\"false\">\n      <svg class=\"svg-icon__link\">\n        <use xlink:href=\"").concat(external, "#").concat(name, "\"></use>\n      </svg>\n    </").concat(opts.tag, ">\n  ");
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  'use strict';


  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  var svgArrowSlider = '<svg xmlns="http://www.w3.org/2000/svg" width="50.438" height="36.032" style="fill: #666;" viewBox="0 0 50.438 36.032"> <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?> <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01 "> <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"> <rdf:Description rdf:about=""/> </rdf:RDF> </x:xmpmeta> <?xpacket end="w"?></metadata><path id="left" class="cls-1" d="M377.5,899.986l-1.507,1.569,1.507,1.567v0.246h0.236l15.568,16.19,2.482-2.584-13.07-13.606h43.739v-3.642h-43.76l13.079-13.616-2.472-2.575-15.552,16.191H377.5v0.26Z" transform="translate(-376 -883.531)"/> </svg>'; // Resize textarea

  function resizeTextArea() {
      $('.text-feedback').on('keyup paste', function () {text-feedback
      var $this = $(this),
          offset = $this.innerHeight() - $this.height();

      if ($this.innerHeight() < this.scrollHeight) {
        $this.height(this.scrollHeight - offset);
      } else {
        $this.height(1);
        $this.height(this.scrollHeight - offset);
      }
    });
  }

    resizeTextArea();
  
    // Slider owl-carousel for Company News

  $('.js-company-news-slider').owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    dots: true,
    navSpeed: 1000,
    dotsSpeed: 500,
    navText: [svgArrowSlider, svgArrowSlider],
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 2
      }
    }
  });
  
  // Slider owl-carousel for Main Slider

  $('.js-main-slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    mouseDrag: false,
    animateOut: 'fadeOut',
    animateIn: 'slideOutin',
    navText: [svgArrowSlider, svgArrowSlider]
  });
  
  // Remodal mobile-panel

  $(document).on('opening', '.mobile-panel__inner', function () {
    $('.remodal-overlay').addClass('mobile');
  });
  $(document).on('closed', '.mobile-panel__inner', function () {
    $('.remodal-overlay').removeClass('mobile');
  });
  
  // Slider owl-carousel for Our Clients

  $('.js-our-clients-slider').owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: true,
    navSpeed: 1000,
    dotsSpeed: 500,
    navText: [svgArrowSlider, svgArrowSlider],
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 2,
        margin: 5
      },
      960: {
        items: 3
      }
    }
  });
  
  // Slider owl-carousel for Our Projects

  $('.js-our-projects-slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navSpeed: 1000,
    dotsSpeed: 500,
    navText: [svgArrowSlider, svgArrowSlider]
  });
  
  // Slider owl-carousel for Our Team

  $('.js-our-team-slider').owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: true,
    navSpeed: 1000,
    dotsSpeed: 500,
    navText: [svgArrowSlider, svgArrowSlider],
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 5
      },
      1280: {
        items: 3
      }
    }
  });
  var PAGE = $('html, body');
  var pageScroller = $('.page-scroller');
  var inMemoryClass = 'page-scroller--memorized';
  var isVisibleClass = 'page-scroller--visible';
  var enabledOffset = 60;
  var pageYOffset = 0;
  var inMemory = false;

  function resetPageScroller() {
    setTimeout(function () {
      if (window.pageYOffset > enabledOffset) {
        pageScroller.addClass(isVisibleClass);
      } else if (!pageScroller.hasClass(inMemoryClass)) {
        pageScroller.removeClass(isVisibleClass);
      }
    }, 150);

    if (!inMemory) {
      pageYOffset = 0;
      pageScroller.removeClass(inMemoryClass);
    }

    inMemory = false;
  }

  if (pageScroller.length > 0) {
    window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
      passive: true
    } : false);
    pageScroller.on('click', function (event) {
      event.preventDefault();
      window.removeEventListener('scroll', resetPageScroller);

      if (window.pageYOffset > 0 && pageYOffset === 0) {
        inMemory = true;
        pageYOffset = window.pageYOffset;
        pageScroller.addClass(inMemoryClass);
        PAGE.stop().animate({
          scrollTop: 0
        }, 500, 'swing', function () {
          window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
            passive: true
          } : false);
        });
      } else {
        pageScroller.removeClass(inMemoryClass);
        PAGE.stop().animate({
          scrollTop: pageYOffset
        }, 500, 'swing', function () {
          pageYOffset = 0;
          window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
            passive: true
          } : false);
        });
      }
    });
    }
  
    // Contacts form submit


  function submitForm() {
    $('.call-back-form').on('submit', function (event) {
      var $this = $(this);
      event.preventDefault();
      $this.closest('.popup-form__section').addClass('success');
      $this.closest('.popup-form').addClass('success-form').find('.popup-success').fadeIn();
      setTimeout(function () {
        $this.closest('.app').find('.remodal-overlay').css('display', 'none');
        $this.closest('.app').find('.remodal-wrapper').css('display', 'none');
        $this.closest('.popup-form__section').removeClass('success');
        $this.closest('.popup-form').removeClass('success-form').find('.popup-success').fadeOut();
        $('html').removeClass('remodal-is-locked');
        $('body').css('padding-right', 0);
      }, 3000);
    });
    $(document).on('opening', '.popup-form', function () {
      $('.remodal-overlay').removeClass('mobile');
    });
  }

    submitForm();
  
    // Video popup

  function videoPlay() {
    var videoModal = $('[data-remodal-id=video]').remodal();
    $('.presentation__btn-play').on('click', function (event) {
      event.preventDefault();
      var $this = $(this),
          videoSrc = $this.attr('href'),
          inRemodalVideo = $this.closest('.app').find('.popup-video__video');
      inRemodalVideo.find('iframe').attr('src', videoSrc);
      videoModal.open();
      console.log(inRemodalVideo);
    });
    $(document).on('closed', '[data-remodal-id=video]', function (e) {
      $('[data-remodal-id="video"] iframe').attr('src', '');
    });
  }

    videoPlay();
  
    // Slider owl-carousel for Work Process

  $('.js-work-process-slider').owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    navSpeed: 1000,
    stagePadding: 0,
    margin: 0,
    autoWidth: true,
    URLhashListener: true,
    startPosition: '0',
    dotsSpeed: 500,
    navText: [svgArrowSlider, svgArrowSlider],
    responsive: {
      0: {
        items: 1,
        autoWidth: false,
        dots: true
      },
      640: {
        items: 3,
        dots: false
      },
      1024: {
        items: 3,
        dots: false
      }
    }
  });
  
  // var css = '<style type="text/css">.container{background:blue};</style>';
  // $('#insta').contents().find("head").append(css);
  // Nav to anchor

  function navToAnchor() {
    $('.js-nav-to-anchor a').on('click', function (e) {
      e.preventDefault();
      var anchor = $(this);
      var mobilePanelModal = $('[data-remodal-id=mobile_panel]').remodal();
      $('.js-btn-burger').removeClass('btn-burger-is-active');
      $('.b-mobile-panel__overlay-menu').removeClass('overlay-is-active');
      $('.b-mobile-panel__nav .b-menu').removeClass('menu-is-active');
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      mobilePanelModal.close();
      return false;
    });
  }

    navToAnchor();
  
    // Fixed panel

  function fixedPanel() {
    var fixedPanel = $('.fixed-panel');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150 && fixedPanel.hasClass('fixed-panel')) {
        fixedPanel.addClass('fixed');
      } else if ($(this).scrollTop() <= 150 && fixedPanel.hasClass('fixed')) {
        fixedPanel.removeClass('fixed');
      }
    });
  }

    fixedPanel();
  
    // Button to up

  function btnUp() {
    var btnUp = $('.js-btn-up');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        btnUp.fadeIn();
      } else {
        btnUp.fadeOut();
      }
    });
    btnUp.on('click', function () {
      $('body, html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }

  btnUp();
  /* Amount nav items
     *( if there are more than 3 items in navigation, a burger is displayed )
  */

  function amountMainNavItem() {
    var mainNavItem = $('.app-header .main-nav__nav ul').find('li'),
        mainNav = $('.app-header').find('.main-nav'),
        btnBurgerTopLine = $('.top-line__btn-burger');

    if ($(window).width() >= 1024 && mainNavItem.length > 3) {
      btnBurgerTopLine.fadeIn(800);
    } else {
      mainNav.fadeIn(800);
    }
  }

    amountMainNavItem();
  
    // Instagram feed setup

  function instagramSet() {
    var dataUsrId = $('.instafeed-list').attr('data-userID'),
        DataAccessToken = $('.instafeed-list').attr('data-accessToken');
    var instaFeed = new Instafeed({
      get: 'user',
      userId: dataUsrId,
      accessToken: DataAccessToken,
      limit: 6,
      resolution: 'standard_resolution',
      template: '<li><a class="insta-link" target="_blank" href="{{link}}"><img class=" mw-100" src="{{image}}"></a></li>'
    });
    instaFeed.run();
  }

  instagramSet();

// Our Blog popup
    function ourBlog() {
        $('.js-more-info').on('click', function (event) {
            event.preventDefault();
            var $thisItem = $(this).closest('.our-item'),
                $thisName = $thisItem.find('.our-name').clone(),
                $thisTextMore = $thisItem.find('.our-text-more').clone(),
                $thisTextMoreAdditional = $thisItem.find('.our-text-more-additional').clone(),
                $thisImgSrc = $thisItem.find('img').attr('src'),
                // $thisImg = $thisItem.find('img').clone(),
                // $thisImg.appendTo('.js-img');
                bgImg = 'background-image: url(' + $thisImgSrc + ');';
                
            // $thisImg.appendTo('.js-img');
            $('.js-img').attr('style', bgImg);
            $thisName.appendTo('.js-title');
            $thisTextMore.appendTo('.js-more-text');
            $thisTextMoreAdditional.appendTo('.js-more-additional-text');

            // console.log($thisImgSrc, bgImg)
        });


        $(document).on('closed', '.popup-our-blog', function (e) {
            // $('.js-img img').remove();
            $('.js-img').attr('style', '');
            $('.js-title .our-name').remove();
            $('.js-more-text .our-text-more').remove();
            $('.js-more-additional-text .our-text-more-additional').remove();
        });
    }

    ourBlog();
});