$(document).ready(function() {
  var varietyMore = {
    itemLeft: $(".banner-left-item"),
    itemRight: $(".banner-list"),
    init() {
      FastClick.attach(document.body);
      tools.goback();
      this.itemDetail();
    },
    itemDetail() {
      this.itemLeft.on("click", function() {
        $(this).addClass("banner-left-show").siblings().removeClass("banner-left-show");
      });
      this.itemRight.on("click", "li", function() {
        window.location.href = "./../main/entertainment_variety_detail.html";
      })
    }
  }
  varietyMore.init();
})
