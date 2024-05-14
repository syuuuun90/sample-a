$('.slider').slick({
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: true,
});


$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash_logo").delay(1200).fadeOut('slow');
});


$(".open_btn").click(function () {
  $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});
$("#g-nav a").click(function () {
    $(".open_btn").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});




$('.title').on('click', function() {
  $('.box').slideUp(500);
    
  let findElm = $(this).next(".box");
    
  if($(this).hasClass('close')){
    $(this).removeClass('close');   
  }else{
    $('.close').removeClass('close'); 
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});


function delayScrollAnime() {
  let time = 0.2;
  let value = time;
  $('.delayScroll').each(function () {
    let parent = this;
    let elemPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let childs = $(this).children();
    
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {
        
        if (!$(this).hasClass("fadeUp")) {
          
          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s");
          $(this).addClass("fadeUp");
          value = value + time;
          
          let index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }
  })
}
  $(window).scroll(function (){
    delayScrollAnime();
  });

  
