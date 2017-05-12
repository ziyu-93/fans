$(document).ready(function() {
  var circlePicSend = {
    icon: $(".content-top .right-img"),
    text: $(".content-top .left-img"),
    pic: $(".banner-bottom .add-img"),
    closeSend: $(".close-send"),
    addImg: $(".add-img"),
    uploaderList: $(".banner-bottom"),
    init: function() {
      tools.goback();
      this.bindEvent();
      this.getHeight();
      tools.textareaFn();
      this.uploaderFn();
    },
    bindEvent: function() {
      var textFlag = false;
      var iconFlag = false;
      var that = this;
      this.icon.on("click", function() {
        iconFlag = true;
        if (iconFlag) {
          $(this).attr("src", "./../img/new_detail_comment_icon_1.png");
          that.text.attr("src", "./../img/new_detail_comment_text.png");
        } else {
          $(this).attr("src", "./../img/new_detail_comment_icon.png");
          that.text.attr("src", "./../img/new_detail_comment_text_1.png");
        }
      });
      this.text.on("click", function() {
        textFlag = true;
        if (textFlag) {
          $(this).attr("src", "./../img/new_detail_comment_text_1.png");
          that.icon.attr("src", "./../img/new_detail_comment_icon.png");
        } else {
          $(this).attr("src", "./../img/new_detail_comment_text.png");
          that.icon.attr("src", "./../img/new_detail_comment_icon_1.png");
        }
      });
      //关闭上传
      this.closeSend.on("touchstart", function() {
        $(this).css("background-color", "#ffabc8").parents(".uploader-wrap").css("display", "none");
      }).on("touchend", function() {
        $(this).css("background-color", "white");
      })
      //添加图片
      this.addImg.on("click", function() {
        that.closeSend.parents(".uploader-wrap").css("display", "block");
      });
    },
    getHeight: function() {
      var wid = this.pic.width();
      console.log(wid);
      this.pic.height(wid);
    },
    uploaderFn: function() {
      var that = this;
      $('#upload_image').on("change", function(event) {
        // 根据这个 <input> 获取文件的 HTML5 js 对象
        var files = event.target.files,
          file;

        if (files && files.length > 0 && files.length <= 6) {


          var a = that.uploaderList.find(".item");
          console.log(a.length);
          files = Array.prototype.slice.call(files);
          var other = 6 - a.length;
          if (a && files.length > other) {
            files = files.slice(0, other);
          }

          // 获取目前上传的文件
          file = files;
          // 来在控制台看看到底这个对象是什么
          console.log(file);
          // 下面是关键的关键，通过这个 file 对象生成一个可用的图像 URL
          // 获取 window 的 URL 工具
          var URL = window.URL || window.webkitURL;
          // 通过 file 生成目标 url
          var wid = that.pic.width();
          for (var i = 0; i < file.length; i++) {
            var imgURL = URL.createObjectURL(file[i]);

            console.log(wid);
            // 那么我们可以做一下诸如文件大小校验的动作
            if (file[i].size > 1024 * 1024 * 2) {
              alert('图片大小不能超过 2MB!');
              return false;
            }
            // 用这个 URL 产生一个 <img> 将其显示出来
            that.uploaderList.prepend($('<img/>').attr({
              'src': imgURL,
              "class": "item",
              "height": wid
            }));

          // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
          //URL.revokeObjectURL(imgURL);
          }
          if (that.uploaderList.find(".item").length >= 6) {
            that.pic.hide();
          } else {
            that.pic.show();
          }
          that.closeSend.parents(".uploader-wrap").css("display", "none");

        } else if (files.length > 6) {
          alert("最多上传6张图片")
        }
      });

    }
  }
  circlePicSend.init();
})
