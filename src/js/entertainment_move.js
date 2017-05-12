$(document).ready(function() {
  var moreDetail = {
    itemLeft: $(".banner-left-item"),
    itemRight: $(".banner-list"),
    scroll: $(".banner-rigth"),
    that: this,
    init: function() {
      tools.goback();
      this.itemDetail();
      this.backTop();
    },
    itemDetail: function() {
      this.itemLeft.on("click", function() {
        $(this).addClass("banner-left-show").siblings().removeClass("banner-left-show");
      });
      this.itemRight.on("click", "li", function() {
        window.location.href = "./../main/entertainment_move_detail.html";
      })
    },
    backTop: function() {
      var scroll_height = null;
      var page_height = $(document).height() - 44; //滚动条高度。
      var scrollHeight = this.scroll[0].scrollHeight; //整个可滚动的高度。
      var that = this;
      this.scroll.on("scroll", function() {
        scroll_height = $(this)[0].scrollTop;
        if (scroll_height + page_height >= scrollHeight - 10) {
          that.addItem();
          scrollHeight = that.scroll[0].scrollHeight;
        }
      })
    },
    addItem: function() {
      var str = '<li class="banner-right-item">' +
        '<img src="./../img/大闹天竺.png">' +
        '<span class="item-name">大闹天竺</span>' +
        '<span class="item-star">王宝强、岳云鹏</span>' +
        '</li>' +
        '<li class="banner-right-item">' +
        '<img src="./../img/大闹天竺.png">' +
        '<span class="item-name">大闹天竺</span>' +
        '<span class="item-star">王宝强、岳云鹏</span>' +
        '</li>';
      this.itemRight.append(str);
    }
  }
  moreDetail.init();
})
