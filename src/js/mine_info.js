$(document).ready(function() {
  var mineInfo = {
    gender: $(".list-gender div"),
    makeSure: $(".make-sure span"),
    chooseGender: $(".wrap-top img"),
    name: $(".list-name div"),
    signature: $(".list-signature div"),
    mailbox: $(".list-mailbox div"),
    closeHead: $(".close-send"),
    head: $(".list-head"),
    back: $(".header-back-detail"),
    location: $(".list-location div"),
    avatar: $(".list-head img"),
    init: function() {
      this.goBack();
      this.bindEvent();
      this.uploaderFn();
    },
    goBack: function() {
      this.back.on("click", function() {
        window.location.href = "./../main/mine.html";
      });
    },
    bindEvent: function() {
      var that = this;
      var flag = true;
      //性别
      this.gender.on("click", function() {
        $(".gender-choose").css("display", "block");
        that.chooseGender.on("click", function() {
          if ($(this).attr("data") == 1) {
            $(this).attr("src", "./../img/mine_man1.png");
            $(this).siblings().attr("src", "./../img/mine_woman0.png");
            console.log(1);
            flag = true;
          } else {
            flag = false;
            $(this).attr("src", "./../img/mine_woman1.png");
            $(this).siblings().attr("src", "./../img/mine_man0.png");
            console.log(1232144);
          }
        });
        //性别
        that.makeSure.on("click", function() {
          if (flag) {
            that.gender.children("span").html("男");
          } else {
            that.gender.children("span").html("女");
          }
          $(this).parents(".gender-choose").css("display", "none");
        });
      });
      //姓名
      this.name.on("click", function() {
        window.location.href = "./../main/mine_changeName.html";
      })
      //个性签名
      this.signature.on("click", function() {
        window.location.href = "./../main/mine_signature.html";
      });
      //更改头像
      this.head.on("click", function() {

        $(".uploader-wrap").css("display", "block");
        that.closeHead.on("click", function() {
          $(this).parents(".uploader-wrap").css("display", "none")
        });
      });
      //邮箱
      this.mailbox.on("click", function() {
        window.location.href = "./../main/mine_mailbox.html";
      });
      //地址
      this.location.on("click", function() {
        window.location.href = "./../main/mine_location.html";
      });
      //生日
      var calendar = new datePicker();
      calendar.init({
        'trigger': '#getTime',
        /*按钮选择器，用于触发弹出插件*/
        'type': 'date',
        /*模式：date日期；datetime日期时间；time时间；ym年月；*/
        'minDate': '1900-1-1',
        /*最小日期*/
        'maxDate': '2100-12-31',
        /*最大日期*/
        'onSubmit': function() { /*确认时触发事件*/
          var theSelectData = calendar.value;
        },
        'onClose': function() {
          /*取消时触发事件*/
        }
      });
    },
    uploaderFn: function() {
      var that = this;
      $('#upload_image').on("change", function(event) {
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
          that.avatar.attr("src", imgURL);
          that.closeHead.parents(".uploader-wrap").css("display", "none");
        }
      });
    }
  };
  mineInfo.init();
})
