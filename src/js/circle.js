$(document).ready(function() {

  var circlePage = {
    mySwiper: "",
    leftItem: $(".left-item .item-text-wrap .item-date"),
    rightItem: $(".right-item .item-text-wrap .item-date"),
    tab: $(".banner-tab li"),
    chooseContent: $(".banner-content"),
    video: $(".item-reply video"),
    banner: $(".banner"),
    backTop: $(".back-top-wrap"),
    leftList: $(".left-list-wrap"),
    rightList: $(".right-list-wrap"),
    tabFlag: true,
    loop: $(".banner-loop"),
    imgList: $(".img-list .img-num"),
    send: $(".send-button"),
    sendChoose: $(".send-choose"),
    looding: $(".looding"),
    that: this,
    init: function() {
      FastClick.attach(document.body);
      this.swiper();
      this.bindEvent();
      this.back_top();
    },
    swiper: function() {
      this.mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        preloadImages: true,
        updateOnImagesReady: true,
        autoplayDisableOnInteraction: false,
        autoplay: 5000, //可选选项，自动滑动
      })
    },
    bindEvent: function() {
      var that = this;
      this.leftItem.on("click", function() {
        window.location.href = "./../main/circle_pic_detail.html";
      });
      this.rightItem.on("click", function() {
        window.location.href = "./../main/circle_video_detail.html";
      });
      this.tab.on("click", function() {
        that.backTop.off("click");
        if ($(this).index() == 0) {
          $(this).addClass("nav-active").siblings().removeClass("nav-active");
          that.chooseContent.find(".tab-left-content").addClass("main-active").siblings(".tab-right-content").removeClass("main-active");
          that.tabFlag = true;
          that.banner[0].scrollHeight = that.leftList.height() + 44 + that.loop.height();
          that.back_top();
        } else if ($(this).index() == 1) {
          $(this).addClass("nav-active").siblings().removeClass("nav-active");
          that.chooseContent.find(".tab-right-content").addClass("main-active").siblings(".tab-left-content").removeClass("main-active");
          that.tabFlag = false;
          that.banner[0].scrollHeight = that.rightList.height() + 44 + that.loop.height();

          that.back_top();
        }
      });
      //头像被挤扁
      this.itemHeader();
      //发布选择弹窗。
      var top = this.loop.height() + 44 + 54 + 50 + 7;
      var sendChooseTop = $(document).height() / 2 - 50;
      var sendChooseLeft = $(document).width() / 2 - this.sendChoose.width() / 2;
      console.log(top);
      // this.send.css({
      //   "top": top,
      //   "display": "block"
      // });
      this.sendChoose.css({
        "top": sendChooseTop,
        "left": sendChooseLeft
      });
      //发布按钮
      this.send.on("click", function() {
        that.sendChoose.parent().css("display", "block");
      });
      this.sendChoose.siblings().on("click", function() {
        $(this).parent().css("display", "none");
      });
      this.sendChoose.on("touchstart", "p", function() {
        $(this).css("background-color", "#ffabc8");
        if ($(this).index() == 0) {
          window.location.href = "./../main/circle_pic_send.html";
        } else {
          window.location.href = "./../main/circle_video_send.html"
        }
      }).on("touchend", function() {
        $(this).css("background-color", "white");
      });

    },
    itemHeader: function() {
      var item = $(".item-right-wrap");
      item.width(this.banner.width() - 26 - 61);
      console.log(item.length);
      console.log(123455123566);
    },
    back_top: function() {
      var scroll_height = 0;
      var page_height = $(document).height() - 54 - 50; //滚动条高度。
      if (this.tabFlag) {
        this.banner[0].scrollHeight = this.leftList.height() + 44 + this.loop.height();
      }
      var srcHeigth = this.banner[0].scrollHeight; //整个可滚动的高度。
      var that = this;
      console.log(srcHeigth);
      this.banner.scroll(function() {
        scroll_height = $(this)[0].scrollTop; //滚动条滚动高度。
        if (scroll_height >= ($(".banner-loop").height() + 44)) {
          that.send.css({
            "position": "fixed",
            "top": "107px"
          })
        } else {
          that.send.css({
            "position": "absolute",
            "top": "54px"
          })
        }
        if (scroll_height + page_height >= $(document).height()) {
          //console.log($(this)[0].scrollTop);
          that.backTop.show();
          if (scroll_height + page_height >= srcHeigth - 5) {

            tools.loodding();
            that.addData();

            // if (that.flag === true) {
            //   that.looding.parents(".looding-wrap").css("display", "none");
            //   console.log("looding消失");
            // }

            srcHeigth = that.banner[0].scrollHeight;

          }
        } else if (scroll_height == 0) {
          that.backTop.hide();
        //console.log("隐藏");
        }

      });
      this.backTop.on("click", function() {
        var timer;
        console.log("返回顶部");
        clearInterval(timer);
        timer = setInterval(function() {
          scroll_height = that.banner[0].scrollTop;
          if (scroll_height - 40 <= 0) {
            that.banner[0].scrollTop = 0;
            clearInterval(timer);
            console.log("清除定时器");
          }
          that.banner[0].scrollTop = scroll_height - 100;
          console.log(that.banner[0].scrollTop);
        }, 30);
      })
    },
    addData: function() {
      var that = this;
      $(function() {
        if (that.tabFlag) {
          console.log("pic加载数据");
          var str = '<li class="left-item">' +
            '<div class="item-top">' +
            '<div class="logo-wrap">' +
            '<img class="item-logo" src=\"./../img/brokeNew_head.png\">' +
            '</div>' +

            '<div class="item-right-wrap">' +
            '<div class="item-right-top">' +
            '<div class="item-title">' +
            '<span class="item-name">糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖糖</span>' +

            '</div>' +
            '<span class="item-floor">5分钟前</span>' +
            '</div>' +
            '<div class="item-text-wrap">' +
            '<p class="item-text">粉丝吧平台超级好用哈！推荐大家来试试，明星 内容超级全面！！！最爱的大幂幂在里面超级详 的介绍！赶紧注册吧！（这不是广告！）' +
            '</p>' +
            '<div class="item-wrap">' +
            '<div class="item-reply">' +
            '<ul class="img-list">' +
            '<li class="img-num"><img class="item-wrap-img" src=\"./../img/brokeNew_luhan2.png\"></li>' +
            '<li class="img-num"><img class="item-wrap-img" src=\"./../img/brokeNew_luhan2.png\"></li>' +
            '</ul></div><span class="item-date">点击查看详情</span></div></div></div></div></li>'
          that.leftList.append(str);
          that.itemHeader();
          that.flag = true;
        } else {
          console.log("video加载数据");
          var str = '<li class="banner-item">' +
            '<div class="item-wrap">' +
            '<img class="item-img" src="http://iph.href.lu/118x80" >' +
            '<div class="item-content">' +
            '<div class="item-title">长得帅就死任性,彭于晏自拍挤出抬头纹</div>' +
            '<p class="item-text">' +
            '<span class="item-text-font">粉丝吧提供</span>'
          '<span class="item-text-date">2017-03-16</span>' +
          '</p></div></div></li>';
          that.rightList.append(str);
          that.flag = true;
        }

      }());
    }
  }
  circlePage.init();
})
