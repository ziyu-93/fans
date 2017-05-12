$(document).ready(function() {
  var starSearch = {
    goWith: $(".star-choose"),
    goStarDetail: $(".top-list"),
    starList: $(".star-list"),
    banner: $(".banner"),
    findStar: $(".header-search input"),
    findBt: $(".searchBg"),
    init: function() {
      tools.goback();
      this.findS();
      $(function() {
        FastClick.attach(document.body);
      });
      this.bindEvent();
      tools.back_top();
      this.chooseList();

    },
    bindEvent: function() {

      this.goStarDetail.on("click", "li", function() {
        window.location.href = "./../main/star_detail.html";
      });

    },
    chooseList: function() {
      var that = this;
      this.goWith.on("click", "li", function() {
        console.log($(this).offset().top);
        //console.log($(this).text());
        var h = $(this).text();
        var b = Array.prototype.slice.call(that.starList.find(".choose-wrap"));
        //console.log(b);
        for (i in b) {
          //console.log(b[i].innerHTML);
          if (b[i].innerHTML == h) {
            console.log("找到了");
            //console.log(b[i].offsetTop + $(this).parents(".bottom-left").offset().top - 44);
            console.log($(this).parents(".bottom-left").offset().top - 44);
            if ($(this).parents(".bottom-left").offset().top - 44 < 198) {
              that.banner[0].scrollTop = 198 + b[i].offsetTop;
            } else {
              that.banner[0].scrollTop = b[i].offsetTop + $(this).parents(".bottom-left").offset().top - 44;
            }

            console.log(that.banner[0].scrollTop);
          }
        }
      });
    },
    findS: function() {
      var value;
      var search = Array.prototype.slice.call(this.starList.find(".choose-name"));
      this.findStar.on("focus", function(ev) {
        ev = ev || window.ev;
        ev.target.value = "";
      }).on("blur", function(ev) {
        ev = ev || window.ev;
        value = ev.target.value;
        console.log(value);
      });
      this.findBt.on("click", function() {
        for (i in search) {
          if (search[i].innerHTML == value) {
            console.log("有这个明星")
            window.location.href = "./../main/star_detail.html";
          }
        }
        console.log("搜索")
      })
    }
  }
  starSearch.init();
})
