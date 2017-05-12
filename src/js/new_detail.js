$(document).ready(function() {
  let newDetail = {
    bottomLink: $(".bottom-wrap img:nth-of-type(1)"),
    store: $(".content-assess .store"),
    zan: $(".content-assess .zan"),
    reply: $(".item-reply .item-reply-text"),
    replymore: $(".item-reply .item-reply-more"),
    looding: $(".looding"),
    replyItem: $(".item-text-wrap"),
    init() {
      FastClick.attach(document.body);
      tools.goback();
      this.bindEvent();
      this.replyMore();
      this.loadMore();
    },
    bindEvent() {
      let that = this;
      let storeFlag = false;
      let zanFlag = false;
      let sendFlag = false;
      this.bottomLink.on("click", function() {
        window.location.href = "./../main/new_detail_comment.html"
      });
      this.store.on("click", function() {
        storeFlag = !storeFlag;
        if (storeFlag) {
          $(this).attr("src", "./../img/new_detail_shoucang.png");
        } else {
          $(this).attr("src", "./../img/new_detail_shoucang_0.png");
        }
      });
      this.zan.on("click", function() {
        zanFlag = !zanFlag;
        if (zanFlag) {
          $(this).attr("src", "./../img/new_detail_zan.png");
        } else {
          $(this).attr("src", "./../img/new_detail_zan_0.png");
        }
      });
    },
    //限制条数，点击更多
    replyMore() {
      if (this.reply.length > 0) {
        this.reply.parent().parent().siblings(".item-wrap-img").show();
        if (this.reply.length > 3) {
          this.reply.parent().siblings(this.replymore).show();
          this.reply.slice(3).css("display", "none");
        }
      } else {
        this.reply.parent().siblings(".item-wrap-img").hide();
      }
    },
    //looding
    loadMore() {
      let top = $(document).height() / 2 - this.looding.height() / 2;
      console.log(top);
      let left = $(document).width() / 2 - this.looding.width() / 2;
      console.log(left);
      this.looding.css({
        "position": "absolute",
        "top": top,
        "left": left,
        "background": "#ffabc8",
        "z-index": "999px",
        "opacity": "0.7",
        "border-radius": "20px"
      })
      this.looding.find(".looding-close").on("click", function() {
        //console.log("123");
        $(this).parents(".looding-wrap").css("display", "none");
      })
    }
  }
  newDetail.init();
})
