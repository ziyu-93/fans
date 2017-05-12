$(document).ready(function() {
  var mineStore = {
    back: $(".header-back-detail"),
    picItem: $(".content-pic-item .item-detail"),
    videoItem: $(".content-video-item .item-detail"),
    nav: $(".banner-top-nav li"),
    infoItem: $(".content-info-item"),
    banner: $(".banner"),
    backTop: $(".back-top-wrap"),
    picList: $(".content-pic-list"),
    videoList: $(".content-video ul"),
    infoList: $(".content-info ul"),
    looding: $(".looding"),
    that: this,
    tabIndex: 0,
    init: function() {
      this.goBack();
      this.bindEvent();
      this.back_top();
    },
    goBack: function() {
      this.back.click(function() {
        window.location.href = "./../main/mine.html";
      })
    },
    bindEvent: function() {
      var that = this;
      this.picItem.on("click", function() {
        window.location.href = "./../main/circle_pic_detail.html";
      });
      this.nav.on("click", function() {
        that.backTop.off("click");
        that.banner[0].scrollTop = 0;
        if ($(this).index() == 0) {
          console.log(0);
          $(".content-pic").show().siblings().hide();
          that.tabIndex = 0;
        } else if ($(this).index() == 1) {
          console.log(1);
          that.tabIndex = 1;
          $(".content-video").show().siblings().hide();
        } else {
          $(".content-info").show().siblings().hide();
          console.log(2);
          that.tabIndex = 2;
        }
        $(this).addClass("show").siblings().removeClass("show");
        that.back_top();
      });
      this.videoItem.on("click", function() {
        window.location.href = "./../main/circle_video_detail.html";
      });
      this.infoItem.on("click", function() {
        window.location.href = "./../main/new_detail.html";
      })
    },
    back_top: function() {
      var scroll_height = 0;
      var page_height = $(document).height() - 88; //滚动条高度。
      var srcHeigth = this.banner[0].scrollHeight; //整个可滚动的高度。
      var that = this;
      console.log(srcHeigth);
      this.banner.off("scroll");
      this.banner.on("scroll", function() {
        scroll_height = $(this)[0].scrollTop; //滚动条滚动高度。

        if (scroll_height + page_height >= $(document).height()) {
          //console.log($(this)[0].scrollTop);
          that.backTop.show();
          if (scroll_height + page_height >= srcHeigth - 5) {

            tools.loodding();
            that.addData();
            srcHeigth = that.banner[0].scrollHeight;
            console.log(srcHeigth);
            if (that.flag === true) {
              that.looding.parents(".looding-wrap").css("display", "none");
              console.log("looding消失");
            }


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
        if (that.tabIndex == 0) {
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
          that.picList.append(str);
          that.flag = true;
        } else if (that.tabIndex == 1) {
          console.log("video加载数据");
          var str = '<li class="right-item">' +
            '<h4>2月18日</h4>' +
            '<div class="right-item-content">' +
            '<p>今天看见鹿晗了，还跟他合影了， 好开心</p>' +
            '  <div>' +
            '<video src="" autoplay poster=\"./../img/brokeNew_luhan.png\">' +

            '</video>' +
            '<img src=\"./../img/entertainment_play.png\">' +
            '</div>' +

            '</div>' +
            '</li>';
          that.videoList.append(str);
          that.flag = true;
        } else {
          console.log("info加载数据");
          var str = '<li class="right-item">' +
            '<h4>2月18日</h4>' +
            '<div class="right-item-content">' +
            '<p>今天看见鹿晗了，还跟他合影了， 好开心</p>' +
            '  <div>' +
            '<video src="" autoplay poster=\"./../img/brokeNew_luhan.png\">' +

            '</video>' +
            '<img src=\"./../img/entertainment_play.png\">' +
            '</div>' +

            '</div>' +
            '</li>';
          that.infoList.append(str);
          that.flag = true;
        }
      }());
    }
  };
  mineStore.init();
})
