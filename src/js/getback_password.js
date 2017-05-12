$(document).ready(function() {
  var timer;
  var getback = {
    phone: $(".number"),
    code: $(".code"),
    jump: $(".main-sign-up a"),
    getCode: $(".get-code"),
    back: $(".header-back-detail"),
    that: this,

    init: function() {
      this.goback();
      this.bindEvent();

    },
    goback: function() {
      this.back.click(function() {
        window.location.href = "./../main/sign_in.html";
      })
    },
    bindEvent: function() {
      var numberVal = null;
      var flag = false;
      var codeFlag = false;
      var num = 60;
      var that = this;
      this.phone.on("input", function() {
        numberVal = $(this).val();
        $(this).siblings(".true").css("display", "block");
        if (numberVal == "") {
          console.log("请输入手机号码");
          $(this).siblings(".true").css("display", "none");
        } else if (!(/^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}$/.test(numberVal))) {
          console.log("格式错误");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
          that.getCode.html("获取验证码");
          clearInterval(timer);
          that.getCd();
        //return false;
        } else {
          console.log("输入正确");
          flag = true;
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
          that.getCd();
        // tools.getCd();
        }
      // if (that.phone.siblings(".true").attr("src") == "./../img/sign_up_corrent.png") {
      //
      // } else {
      //
      // }
      });
      this.code.on("input", function() {
        var codeNum = 1;
        $(this).siblings(".true").css("display", "block");
        if ($(this).val() == '') {
          console.log("请输入验证码");
          $(this).siblings(".true").css("display", "none");
        } else if ($(this).val() == codeNum) {
          console.log("输入正确");
          codeFlag = true;
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
        } else {
          console.log("输入错误");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
        }
      });
      this.jump.on("click", function() {
        if (codeFlag && flag) {
          window.location.href = "./../main/change_password.html";
        } else {
          alert("输入错误，请重新输入")
        }
      });

    },
    //点击获取验证码
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
  }
  getback.init();
})
