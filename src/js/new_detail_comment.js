
$(document).ready(function() {

  let newDetailComment = {
    icon: $(".content-top .right-img"),
    text: $(".content-top .left-img"),
    reply: $(".content-reply"),
    textarea: $("#text"),
    fontNum: $(".font-num"),

    init() {
      //FastClick.attach(document.body);
      tools.goback();
      this.bindEvent();
      this.textareaFn();
    },
    bindEvent() {
      let textFlag = false;
      let iconFlag = false;
      let that = this;
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
      this.text.click(function() {
        textFlag = true;
        if (textFlag) {
          $(this).attr("src", "./../img/new_detail_comment_text_1.png");
          that.icon.attr("src", "./../img/new_detail_comment_icon.png");
        } else {
          $(this).attr("src", "./../img/new_detail_comment_text.png");
          that.icon.attr("src", "./../img/new_detail_comment_icon_1.png");
        }
      });
    },
    //文本域
    textareaFn() {
      let that = this;
      let textnum = 0;
      let textContent = '';
      //兼容
      let ie = !!window.ActiveXObject;
      if (ie) {
        this.textarea.onpropertychange = function() {
          textnum = $(this).val().length;
          if (textnum > 290) {
            if (textnum === 300) {
              that.fontNum.html(300);
            }
            that.fontNum.css({
              "color": "red",
              "font-weight": "600"
            });
          } else {
            that.fontNum.css({
              "color": "#bbb",
              "font-weight": "100"
            });
          }
          that.fontNum.html(textnum);
        };
      } else {
        this.textarea.on("input", function() {
          textnum = $(this).val().length;
          if (textnum > 290) {
            that.fontNum.css({
              "color": "red",
              "font-weight": "600"
            });
          } else {
            that.fontNum.css({
              "color": "#bbb",
              "font-weight": "100"
            });
          }
          that.fontNum.html(textnum);
          if (textnum >= 300) {
            that.fontNum.html(300);
            console.log("13");
          }
        })
      }
      ;
      this.reply.click(function() {
        let textareaText = that.textarea.val();
        alert("评论成功");
      })



    }
  }
  newDetailComment.init();
})
