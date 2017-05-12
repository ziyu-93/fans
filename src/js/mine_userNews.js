$(document).ready(function() {
  var mineUsernews = {
    back: $(".header-back-detail"),
    userItem: $(".banner-bottom-list"),
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
      this.userItem.on("click", "li", function() {
        window.location.href = "./../main/new_detail_reply.html";
      })
    }
  }
  mineUsernews.init()
})
