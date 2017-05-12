$(document).ready(function() {
  var mine = {
    newInfo: $(".info-num"),
    changeMine: $(".change-mine-data"),
    mineNews: $(".mine-info"),
    mineSend: $(".mine-send"),
    mineStore: $(".mine-store"),
    dropOut: $(".dropOut"),
    changeBg: $(".change-Bg-wrap"),
    bgBt: $(".box-top input"),
    that: this,
    init: function() {
      FastClick.attach(document.body);
      this.bindEvent();
    },
    bindEvent: function() {
      var that = this;
      $(function() {
        if (that.newInfo.html().length == 0) {
          that.newInfo.css("display", "none");
        } else if (that.newInfo.html().length == 1) {
          that.newInfo.css("width", "23");
        } else {
          that.newInfo.css("width", "39");
        }
      });
      this.changeMine.on("click", function() {
        window.location.href = "./../main/mine_info.html";
      });
      this.mineNews.on("click", function() {
        window.location.href = "./../main/mine_news.html";
      });
      this.mineSend.on("click", function() {
        window.location.href = "./../main/mine_send.html";
      });
      this.mineStore.on("click", function() {
        window.location.href = "./../main/mine_store.html";
      });
      this.dropOut.on("click", function() {
        $(".drop-out-wrap").show();
      });
      $(".drop-out-wrap").on("touchstart", "span", function() {
        $(this).addClass("bgcolor").siblings().removeClass("bgcolor");
        $(this).parents(".drop-out-wrap").hide();
      }).on("touchend", function() {
        $(this).removeClass("bgcolor");
      });
      this.changeBg.on("click", function() {
        $(".bg-wrap").show();
        that.uploaderFn();
      })
      $(".box-close span").on("click", function(e) {
        e.stopPropagation();
        $(this).parents(".bg-wrap").hide();
      });
    },
    uploaderFn: function() {
      var that = this;
      this.bgBt.on("change", function(event) {
        // 根据这个 <input> 获取文件的 HTML5 js 对象
        var files = event.target.files,
          file;
        if (files) {
          file = files;
          var URL = window.URL || window.webkitURL;
          var imgURL = URL.createObjectURL(file[0]);
          if (file[0].size > 1024 * 1024 * 2) {
            alert('图片大小不能超过 2MB!');
            return false;
          }
          $(".banner-top").css({
            "background": "url(" + imgURL + ")0px 0px/ cover round"
          });
          $(this).parents(".bg-wrap").hide();
        }
      });
    }
  };
  mine.init();
})
