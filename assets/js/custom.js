jQuery(document).ready(function ($) {


  $('.lines').click(function(){
    $('.header .navigation').toggleClass('show')
  });
  $('.lines').click(function(){
    $('.lines').toggleClass('show')
  });
  $('.navigation > ul > li').click(function(){
    $('.navigation > ul > li').removeClass('open')
    $(this).addClass('open')
  })

  // sticky
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 100) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

  // Testimonial js
  $('.testominal-slider').slick({
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: File,
    rows: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
     
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '80px',
          slidesToScroll: 1
        }
      }
    ]
  });

  // love from root slider js

if ($(window).width() < 601) {
  $('.cardSlider').slick({
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '100px',
    slidesToScroll: 1,
    rows:0, 
    arrows: false,
    dots: false,
  });
  }



  // single img slider start
  var $status = $('.slider__counter');
  var $slickElement = $('.big-img-slide');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.html(i + ' / ' + slick.slideCount);
  });
  $('.big-img-slide').slick({
    appendArrows: '.append_arrow',
    slidesToShow: 1,
    infinite: false,
    rows: 0,
    slidesToScroll: 1,
  });
});






