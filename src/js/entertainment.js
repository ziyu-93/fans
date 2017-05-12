/**
 * Created by bai on 2017/3/15.
 */
$(document).ready(function() {


  var entertainmentPage = {
    mySwiper: "",
    more: $(".banner-title-rigth"),
    fileItem: $(".banner-file .file-item"),
    activeItem: $(".banner-pic"),
    variety: $(".variety-item"),
    tvItem: $(".banner-file-tv .file-item"),
    init: function() {
      FastClick.attach(document.body);
      this.swiper();
      this.goDetail();
    },
    swiper: function() {
      this.mySwiper = new Swiper(".swiper-container", {
        pagination: '.swiper-pagination',
        preloadImages: true,
        updateOnImagesReady: true,
        autoplayDisableOnInteraction: false,
        autoplay: 5000, //可选选项，自动滑动
      })
    },
    goDetail: function() {
      this.fileItem.on("click", function() {
        window.location.href = "entertainment_move_detail.html";
      });
      this.activeItem.on("click", "img", function() {
        window.location.href = "entertainment_variety_detail.html";
      });
      this.variety.on("click", function() {
        window.location.href = "./../main/entertainment_variety_detail.html";
      });
      this.tvItem.on("click", function() {
        window.location.href = "entertainment_tv_detail.html";
      })
    }
  }
  entertainmentPage.init();
})
