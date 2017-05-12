$(document).ready(function() {
  var starInforDetail = {
    item: $(".banner-wrap"),
    init: function() {
      tools.goback();
      this.bindEvent();
      tools.back_top();
    },
    bindEvent: function() {
      this.item.on("click", ".item-wrap", function() {
        window.location.href = "./../main/new_detail.html";
      })
    }
  }
  starInforDetail.init();
})
