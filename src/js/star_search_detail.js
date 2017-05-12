$(document).ready(function() {
  var starSearchDetail = {
    itemList: $(".banner-starList"),
    init: function() {
      FastClick.attach(document.body);
      this.bindEvent();
      tools.goback();
    },
    bindEvent: function() {
      this.itemList.on("click", "li", function() {
        window.location.href = "./../main/star_detail.html";
      })
    }
  };
  starSearchDetail.init();
})
