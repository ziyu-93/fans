let sign_in = {
  clickJump: $(".main-sign-in"),
  num: $(".number"),
  password: $(".pw"),
  init() {
    this.testNumPw();
  },
  //验证
  testNumPw() {
    let that = this;
    let number = null;
    let pw = null;
    //账号
    this.num.on("input", function() {
      number = $(this).val();
      $(this).siblings(".true").css("display", "block");
      if (number) {
        $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
      } else if (number == "") {
        $(this).siblings(".true").css("display", "none");
      } else {
        $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
      }
    })
    //密码
    this.password.on("input", function() {
      $(this).siblings(".true").css("display", "block");
      pw = $(this).val();
      if (pw) {
        $(this).siblings(".true").attr("src", "./../img/sign_up_corrent.png");
      } else if (pw == "") {
        $(this).siblings(".true").css("display", "none");
      } else {
        $(this).siblings(".true").attr("src", "./../img/sign_up_wrong.png");
      }
    });
    //跳转
    this.clickJump.click(function() {
      if (number && pw) {
        window.location.href = "./../main/new.html";
      } else {
        alert("输入错误");
      }
    })

  }
}
sign_in.init();
