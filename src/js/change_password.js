$(document).ready(function() {
  var getback = {
    password: $(".password"),
    surePw: $(".makeSure"),
    jump: $(".main-sign-up a"),
    back: $(".header-back-detail"),
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
      var that = this;
      var flag = false;
      var sureFlag = false;
      //密码验证
      this.password.on("focus", function() {
        flag = false;
        if ($(this).val() == '') {
          console.log("请输入密码");
        }
      }).on("blur", function() {
        $(this).siblings(".true").css("display", "block");
        if (that.password.val() == '') {
          console.log("请输入密码");
          $(this).siblings(".true").css("display", "none");
        } else if (that.password.val().length < 6) {
          console.log("最少六位");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
        } else {
          console.log("输入正确");
          flag = true;
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
        }
      })
      //确认密码
      this.surePw.on("focus", function() {
        if ($(this).val() == '') {
          console.log("请再次输入密码");
        }
      }).on("blur", function() {
        $(this).siblings(".true").css("display", "block");
        var surePwnumber = that.password.val();
        if (that.surePw.val() == "") {
          console.log("请再次输入密码");
          $(this).siblings(".true").css("display", "none");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
        } else if (that.surePw.val() == surePwnumber) {
          console.log("输入正确")
          sureFlag = true;
          $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
        } else {
          console.log("输入错误");
          $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
        }
      });
      //跳转登录
      this.jump.click(function() {
        if (flag && sureFlag) {
          window.location.href = "./../main/sign_in.html";
        } else {
          alert("输入错误，请重新输入");
          return;
        }
      });
    }
  }
  getback.init();
})
