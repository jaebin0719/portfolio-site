window.onload = function(){
    var swiper = new Swiper(".projectSwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
};