$(document).ready(function() {
  var circlePicDetail = {
    store: $(".store"),
    zan: $(".zan"),
    bigImg: $(".banner-top"),
    bigImgWrap: $(".bigImg-wrap"),
    bottomLink: $(".bottom-wrap img:nth-of-type(1)"),
    reply: $(".item-reply .item-reply-text"),
    init: function() {
      FastClick.attach(document.body);
      tools.goback();
      this.bindEvent();
      this.largeImg();
      this.replyMore();
    },
    bindEvent: function() {
      var that = this;
      var storeFlag = false;
      var zanFlag = false;
      // this.bottomLink.on("click", function() {
      //   window.location.href = "./../main/new_detail_comment.html"
      // });
      this.store.on("click", function() {
        storeFlag = !storeFlag;
        if (storeFlag) {
          $(this).attr("src", "./../img/new_detail_shoucang.png");
        } else {
          $(this).attr("src", "./../img/new_detail_shoucang_0.png");
        }
      });
      this.zan.on("click", function() {
        zanFlag = !zanFlag;
        if (zanFlag) {
          $(this).attr("src", "./../img/new_detail_zan.png");
        } else {
          $(this).attr("src", "./../img/new_detail_zan_0.png");
        }
      });
      this.bottomLink.on("click", function() {
        window.location.href = "./../main/new_detail_comment.html"
      });
    },
    replyMore: function() {
      if (this.reply.length > 0) {
        this.reply.parent().parent().siblings(".item-wrap-img").show();
        if (this.reply.length > 3) {
          this.reply.parent().siblings(this.replymore).show();
          this.reply.slice(3).css("display", "none");
        }
      } else {
        this.reply.parent().siblings(".item-wrap-img").hide();
      }
    },
    largeImg: function() {
      var that = this;
      var src = "";
      that.bigImg.on("click", ".item-wrap-img", function() {
        that.bigImgWrap.css("display", "block").children().attr("src", $(this).attr("src"));
        //this.bigImgWrap.
        return;
      });

      this.bigImgWrap.on("click", function() {
        $(this).css("display", "none");
      })
    }
  }
  circlePicDetail.init();
})
