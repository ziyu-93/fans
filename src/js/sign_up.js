$(document).ready(function() {
  var timer;
  var getback = {
    phone: $(".phone_number"),
    //phoneVal: $(".phone_number").val(),
    pw: $(".pw_number"),
    surePw: $(".pw_sure"),
    testVal: $(".code_number"),
    jump: $(".main-sign-up a"),
    allInput: $(".main-number input"),
    allImg: $(".main-number .true"),
    that: this,
    getCode: $(".get-code"),
    init: function() {
      tools.goback();
      this.bindEvent();
    },

    bindEvent: function() {
      var that = this;
      var flag = false;
      var pwFlag = false;
      var a = null;
      var numberVal = null;
      //账号验证
      this.phone.on("input", function() {
        //console.log(that.phoneVal);
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
          //that.getCd();
          return false;
        } else {
          console.log("输入正确");
          flag = true;
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
          that.getCd();
        }
      });

      //验证码
      this.testVal.on("input", function() {
        var codeNum = 1;
        $(this).siblings(".true").css("display", "block");
        if ($(this).val() == '') {
          console.log("请输入验证码");
          $(this).siblings(".true").css("display", "none");
        } else if ($(this).val() == codeNum) {
          console.log("输入正确");
          flag = true;
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
        } else {
          console.log("输入错误");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
        }
      })
      //密码验证
      this.pw.on("input", function() {
        $(this).siblings(".true").css("display", "block");
        if (that.pw.val() == '') {
          console.log("请输入密码");
          $(this).siblings(".true").css("display", "none");
        } else if (that.pw.val().length < 6) {
          console.log("最少六位");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
        } else {
          console.log("输入正确");
          flag = true;
          pwFlag = true;
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
        }
      })
      //确认密码
      this.surePw.on("input", function() {
        $(this).siblings(".true").css("display", "block");
        var surePwnumber = that.pw.val();
        if (that.surePw.val() == "") {
          console.log("请再次输入密码");
          $(this).siblings(".true").css("display", "none");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
        } else if (that.surePw.val() == surePwnumber) {
          console.log("输入正确")
          flag = true;
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
        } else {
          console.log("输入错误");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
        }
      });
      //跳转登录
      this.jump.click(function() {
        for (var i = 0; i < that.allInput.length; i++) {
          if (that.allInput[i].val !== "" && flag && pwFlag) {
            window.location.href = "./../main/sign_in.html";
          } else {
            alert("输入错误，请重新输入");
            return;
          }
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
// @"^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\\d{8}$";
})
