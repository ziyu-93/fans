$(document).ready(function() {
  var mineSystem = {
    back: $(".header-back-detail"),
    systemItem: $(".banner-top-list"),
    init: function() {
      this.goBack();
      this.bindEvent();
      tools.back_top();
    },
    goBack: function() {
      this.back.click(function() {
        window.location.href = "./../main/mine_news.html";
      })
    },
    bindEvent: function() {
      this.systemItem.on("click", "li", function() {
        window.location.href = "./../main/mine_activity.html";
      })
    }
  }
  mineSystem.init()
})
