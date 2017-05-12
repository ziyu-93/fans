$(document).ready(function() {
  var timer;
  var mineMailbox = {
    back: $(".header-back-detail"),
    success: $(".main-sign-up a"),
    successWrap: $(".success-wrap"),
    close: $(".close"),
    code: $(".code"),
    getCode: $(".get-code"),
    that: this,
    email: $(".email"),
    init: function() {
      this.goBack();
      this.bindEvent();
    },
    goBack: function() {
      this.back.click(function() {
        window.location.href = "./../main/mine_info.html";
      })
    },
    bindEvent: function() {
      var that = this;
      var match = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      var emailFlag = false;
      var codeFlag = false;
      //点击绑定邮箱。点击按钮
      this.success.on("click", function() {
        that.successWrap.css("display", "block");
        that.close.click(function() {
          $(this).parent().css("display", "none");
        })
      });
      //输入邮箱
      this.email.on("focus", function() {
        $(this).on("input", function() {
          if ($(this).val() == "") {
            $(this).siblings(".true").css("display", "none");
          } else {
            $(this).siblings(".true").css("display", "block");
          }
        })
      }).on("blur", function() {
        var content = $(this).val();
        if (match.test(content)) {
          console.log("正确");
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
          //输入邮箱并且正确，才可以点击获取验证码。
          emailFlag = true;
          if (emailFlag) {
            that.getCd();
          }
        } else {
          console.log("邮箱格式错误");
        }

      });

    //验证码
    },
    //获取验证码
    getCd: function() {
      var num = 60;
      var that = this;
      this.getCode.click(function() {
        $(this).off("click");
        that.getCode.html(num + "s");
        clearInterval(timer);
        timer = setInterval(function() {
          num -= 1;
          if (num == 0) {
            that.getCode.html("获取验证码");
            clearInterval(timer);
            that.getCd();
          } else {
            that.getCode.html(num + "s");
          }

        }, 1000);
      })
    }
  };
  mineMailbox.init();
})
