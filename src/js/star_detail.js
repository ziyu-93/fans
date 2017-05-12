$(document).ready(function() {
  var starDetail = {
    back: $(".header-back"),
    item: $(".banner-item"),
    works: $(".star-works-wrap"),
    mainImg: $(".star-relationship-map img:nth-of-type(3)"),
    init: function() {
      FastClick.attach(document.body);
      this.goback();
      this.bindEvent();
    },
    goback: function() {
      this.back.click(function() {
        window.history.go(-1);
      })
    },
    bindEvent: function() {
      var top = this.mainImg.parent().height() / 2 - 30;
      var left = this.mainImg.parent().width() / 2 - 30;
      this.mainImg.css({
        "top": top,
        "left": left,
        "display": "block"
      });
      this.item.on("click", function() {
        window.location.href = "./../main/new_detail.html";
      });
      this.works.on("click", "img", function() {
        //window.location.href = "跳转页面";
        console.log(123);
      })
    }
  }
  starDetail.init();
})
