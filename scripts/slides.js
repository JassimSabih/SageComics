document.addEventListener("DOMContentLoaded", () => {
    const elementSwiper = new Swiper(".hero-comics", {
       effect: "fade",
       allowTouchMove: false,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      }
    });
})