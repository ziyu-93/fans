
var tools = {
  /**
   * 方法名字
   * loodding.back_top.goback.addData
   */

  looding: $(".looding"),
  banner: $(".banner"),
  back: $(".header-back-detail"),
  flag: false,
  backTop: $(".back-top-wrap"),
  send: $(".send"),
  textarea: $("#text"),
  fontNum: $(".font-num"),
  that: this,
  getCode: $(".get-code"),
  /**
   *
   * @param  looding对象
   * @return 加载looding动画
   */
  loodding: function() {

    var top = $(document).height() / 2 - this.looding.height() / 2;
    //console.log(top);
    var left = $(document).width() / 2 - this.looding.width() / 2;
    //console.log(left);
    this.looding.css({
      "position": "absolute",
      "top": top,
      "left": left,
      "background": "#000",
      "z-index": "999",
      "opacity": "0.3",
      "border-radius": "15px"

    });
    console.log("looding出现");
    this.looding.parent().css("display", "block").find(".looding-close").on("click", function() {

      $(this).parents(".looding-wrap").css("display", "none");
    });
  //引用自动消失。
  //this.looding.parent().css("display", "none");
  },

  /**
   *
   *页面滚动事件，并且返回顶部。内部嵌套数据加载。
   *  banner_scroll滚动对象
   *  flag只有一个头部，没有nav。flag = false; 有nav。flag = true;
   */
  back_top: function(flag) {
    var scroll_height = null;
    if (flag) {
      var page_height = $(document).height() - 54 - 50; //滚动条高度。
    } else {
      var page_height = $(document).height() - 44; //滚动条高度。
    }

    var scrollHeight = this.banner[0].scrollHeight; //整个可滚动的高度。
    var that = this;

    this.banner.scroll(function() {
      scroll_height = $(this)[0].scrollTop; //滚动条滚动高度。

      if (scroll_height + page_height >= $(document).height()) {
        that.backTop.show();
        if (scroll_height + page_height >= scrollHeight - 5) {
          that.loodding();
          that.addData();
          if (that.flag === true) {
            that.looding.parents(".looding-wrap").css("display", "none");
            console.log("looding消失");
          }
          scrollHeight = that.banner[0].scrollHeight;
        }
      } else if (scroll_height == 0) {
        that.backTop.hide();
      //console.log("隐藏");
      }
    });
    this.backTop.on("click", function() {
      console.log("返回顶部");
      var timer;
      clearInterval(timer);
      scroll_height = that.banner[0].scrollTop;
      timer = setInterval(function() {
        if (scroll_height - 10 <= 0) {
          that.banner[0].scrollTop = 0;
          clearInterval(timer);
        }
        that.banner[0].scrollTop = scroll_height - 40;
        console.log(that.banner[0].scrollTop);
      }, 30)
    })
  },

  /**
   * 返回上一级
   */
  goback: function() {
    this.back.on("click", function() {
      window.history.go(-1);
    })
  },

  /**
   * 数据加载
   * @param {[type]} classList [description]
   */
  addData: function(classList) {
    var that = this;
    $(function() {
      console.log("加载数据");
      var str = '<li class="banner-item">'
        + '<div class="item-wrap">'
        + '<img class="item-img" src="http://iph.href.lu/118x80" >'
        + '<div class="item-content">'
        + '<div class="item-title">长得帅就死任性,彭于晏自拍挤出抬头纹</div>'
        + '<p class="item-text">'
        + '<span class="item-text-font">粉丝吧提供</span>'
      '<span class="item-text-date">2017-03-16</span>'
      + '</p></div></div></li>';
      that.classList.append(str);
      that.flag = true;
    }());
  },

  /**
   * 文本部分
   * @return {[type]} [description]
   */
  textareaFn: function() {
    var that = this;
    var textnum = 0;
    var textContent = '';
    //兼容
    var ie = !!window.ActiveXObject;
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
    //点击评论
    this.send.on("click", function() {
      var textareaText = that.textarea.val();
      console.log(textareaText);

    });

  }

}
