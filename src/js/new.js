/**
 * Created by bai on 2017/3/14.
 */
(function($) {
  let newPage = {
    mySwiper: "",
    myScroll: "",
    classList: $(".banner-wrap"),
    banner_scroll: $(".banner"),
    looding: $(".looding"),
    back: $(".back-top-wrap"),
    flag: false,
    init() {
      FastClick.attach(document.body);
      this.swiper();
      this.bindEvent();
      this.back_top();
    },
    swiper() {
      this.mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        preloadImages: true,
        updateOnImagesReady: true,
        autoplayDisableOnInteraction: false,
        autoplay: 5000, //可选选项，自动滑动
      })
    },
    bindEvent() {
      let timer;
      this.classList.on("click", ".item-wrap", function() {
        window.location.href = "new_detail.html";
      })
    },
    //回到顶部
    back_top() {
      let scroll_height = null;
      let page_height = $(document).height() - 54 - 49; //滚动条高度。
      let scrollHeight = this.banner_scroll[0].scrollHeight; //整个可滚动的高度。
      let that = this;

      this.banner_scroll.scroll(function() {
        scroll_height = $(this)[0].scrollTop; //滚动条滚动高度。

        if (scroll_height + page_height >= scrollHeight - 50) {
          that.back.show();
          if (scroll_height + page_height >= scrollHeight - 5) {
            that.loodding();
            that.addData();
            if (that.flag === true) {
              console.log("123");
              that.looding.parents(".looding-wrap").css("display", "none");
            }
            scrollHeight = that.banner_scroll[0].scrollHeight;
          }
        } else if (scroll_height == 0) {
          that.back.hide();
        //console.log("隐藏");
        }
      });
      this.back.click(function() {
        console.log("返回顶部");
        let timer;
        scroll_height = that.banner_scroll[0].scrollTop;
        timer = setInterval(function() {
          if (scroll_height - 10 <= 0) {
            that.banner_scroll[0].scrollTop = 0;
            clearInterval(timer);
          }
          that.banner_scroll[0].scrollTop = scroll_height - 40;
          console.log(that.banner_scroll[0].scrollTop);
        }, 30)
      })
    },
    addData() {
      let that = this;
      $(function() {
        console.log("加载数据");
        let str = '<li class="banner-item">' +
          '<div class="item-wrap">' +
          '<img class="item-img" src="http://iph.href.lu/118x80" >' +
          '<div class="item-content">' +
          '<div class="item-title">长得帅就死任性,彭于晏自拍挤出抬头纹</div>' +
          '<p class="item-text">' +
          '<span class="item-text-font">粉丝吧提供</span>'
        '<span class="item-text-date">2017-03-16</span>' + '</p></div></div></li>';
        that.classList.append(str);
        that.flag = true;
      }());
    },
    //looding
    loodding() {
      let top = $(document).height() / 2 - this.looding.height() / 2;
      //console.log(top);
      let left = $(document).width() / 2 - this.looding.width() / 2;
      //console.log(left);
      this.looding.css({
        "position": "absolute",
        "top": top,
        "left": left,
        "background": "#ffabc8",
        "z-index": "999",
        "opacity": "0.7",
        "border-radius": "20px"
      });
      this.looding.parents().css("display", "block").find(".looding-close").on("click", function() {
        //console.log("123");
        $(this).parents(".looding-wrap").css("display", "none");
      });
    }

  }
  newPage.init();
})(jQuery)
