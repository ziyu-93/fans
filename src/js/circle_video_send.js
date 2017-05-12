$(document).ready(function() {
  var circleVideoSend = {
    icon: $(".content-top .right-img"),
    text: $(".content-top .left-img"),
    addImg: $(".add-img"),
    uploaderList: $(".banner-bottom"),
    closeSend: $(".close-send"),
    init: function() {
      tools.goback();
      this.bindEvent();
      tools.textareaFn();
      this.uploaderFn();
    },
    bindEvent: function() {
      var textFlag = false;
      var iconFlag = false;
      var that = this;
      this.icon.on("touchstart", function() {
        iconFlag = true;
        if (iconFlag) {
          $(this).attr("src", "./../img/new_detail_comment_icon_1.png");
          that.text.attr("src", "./../img/new_detail_comment_text.png");
        } else {
          $(this).attr("src", "./../img/new_detail_comment_icon.png");
          that.text.attr("src", "./../img/new_detail_comment_text_1.png");
        }
      });
      this.text.on("touchstart", function() {
        textFlag = true;
        if (textFlag) {
          $(this).attr("src", "./../img/new_detail_comment_text_1.png");
          that.icon.attr("src", "./../img/new_detail_comment_icon.png");
        } else {
          $(this).attr("src", "./../img/new_detail_comment_text.png");
          that.icon.attr("src", "./../img/new_detail_comment_icon_1.png");
        }
      });
      //点击出现选择框
      this.addImg.on("touchstart", function() {
        that.closeSend.parents(".uploader-wrap").css("display", "block");
      });
      //关闭上传
      this.closeSend.on("touchstart", function() {
        $(this).css("background-color", "#ffabc8").parents(".uploader-wrap").css("display", "none");
      }).on("touchend", function() {
        $(this).css("background-color", "white");
      })
    },
    uploaderFn: function() {
      var that = this;
      $('#upload_video').on("change", function(event) {
        var files = event.target.files,
          file;
        if (files) {
          file = files;
          console.log(file);
          var URL = window.URL || window.webkitURL;
          var imgURL = URL.createObjectURL(file[0]);
          that.uploaderList.prepend($('<video></video>').attr("src", imgURL));
          that.uploaderList.find("img").hide();
          that.closeSend.parents(".uploader-wrap").css("display", "none");
        }
      })
    }
  }
  circleVideoSend.init();
})
