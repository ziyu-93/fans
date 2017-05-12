$(document).ready(function() {
  var mineTvDetail = {
    bottomTop: $(".banner-bottom"),
    reply: $(".item-reply .item-reply-text"),
    back: $(".back"),
    bottomLink: $(".bottom-wrap img:nth-of-type(1)"),
    init: function() {
      this.bindEvent()
    },
    bindEvent: function() {
      var top = $(".banner-top").height();
      this.bottomTop.css("top", top);
      if (this.reply.length > 0) {
        this.reply.parent().parent().siblings(".item-wrap-img").show();
        this.reply.parent().siblings(".item-reply-more").show();
        this.reply.slice(3).css("display", "none");
      } else {
        this.reply.parent().parent().siblings(".item-wrap-img").hide();
        this.reply.parent().siblings(".item-reply-more").hide();
      }
      this.back.on("click", function() {
        window.history.go(-1);
      });
      this.bottomLink.on("click", function() {
        window.location.href = "./../main/new_detail_comment.html"
      });
    }
  }
  mineTvDetail.init();
})
