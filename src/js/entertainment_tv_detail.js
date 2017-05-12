$(document).ready(function() {
  var TvDetail = {
    star: $(".star"),
    init: function() {
      tools.goback();
      this.bindEvent();
    },
    bindEvent: function() {
      this.star.on("click", function() {
        window.location.href = "./../main/star_detail.html";
      });

    }
  }
  TvDetail.init();
})
