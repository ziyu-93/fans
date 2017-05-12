$(document).ready(function() {
  var mineNews = {
    back: $(".header-back-detail"),
    topNews: $(".banner-top .num"),
    bottomNews: $(".banner-bottom .num"),
    // systemPull: $(".banner-systemInfo .pull img"),
    // messagePull: $(".banner-ReplyMessage .pull img"),
    messageItem: $(".banner-ReplyMessage"),
    titleJump: $(".title"),
    init: function() {
      this.goBack();
      this.bindEvent();
    },
    goBack: function() {
      this.back.click(function() {
        window.location.href = "./../main/mine.html";
      })
    },
    bindEvent: function() {
      var that = this;
      // var systemFlag = true;
      // var messageFlag = true;
      if (this.topNews.html().length == 0) {
        this.topNews.css("display", "none");
      } else if (this.topNews.html().length == 1) {
        this.topNews.css("width", "23");
      } else {
        this.topNews.css("width", "39");
      }
      if (this.bottomNews.html().length == 0) {
        this.bottomNews.css("display", "none");
      } else if (this.bottomNews.html().length == 1) {
        this.bottomNews.css("width", "23");
      } else {
        this.bottomNews.css("width", "39");
      }
      if (this.topNews.html() == 0) {
        this.topNews.hide();
      } else {
        this.topNews.show();
      }
      if (this.bottomNews.html() == 0) {
        this.bottomNews.hide();
      } else {
        this.bottomNews.show();
      }
      // this.systemPull.on("click", function() {
      //   if (systemFlag) {
      //     $(this).parent().siblings("ul").css({
      //       "display": "block"
      //     });
      //     systemFlag = false;
      //     $(this).attr("src", "./../img/mine_pullUp.png");
      //   } else {
      //     $(this).parent().siblings("ul").css({
      //       "display": "none"
      //     });
      //     systemFlag = true;
      //     $(this).attr("src", "./../img/mine_pullDown.png");
      //   }
      // });
      // this.messagePull.on("click", function() {
      //   if (messageFlag) {
      //     $(this).parent().siblings("ul").css({
      //       "display": "block"
      //     });
      //     messageFlag = false;
      //     $(this).attr("src", "./../img/mine_pullUp.png");
      //   } else {
      //     $(this).parent().siblings("ul").css({
      //       "display": "none"
      //     });
      //     messageFlag = true;
      //     $(this).attr("src", "./../img/mine_pullDown.png");
      //   }
      // });
      this.messageItem.on("click", "li", function() {
        window.location.href = "./../main/new_detail_reply.html";
      });
      this.titleJump.on("click", function() {
        if ($(this).attr("current") == 0) {
          window.location.href = "./../main/mine_system.html";
        } else {
          window.location.href = "./../main/mine_userNews.html";
        }
      })
    }
  };
  mineNews.init()
})
