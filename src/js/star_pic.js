$(document).ready(function() {
  var starPic = {
    banner: $(".banner"),
    that: this,
    imgBox: $(".img-wrap"),
    init: function() {
      tools.goback();
      this.bindEvent();
    },
    bindEvent: function() {
      var that = this;
      var columnHeightArr = [];
      columnHeightArr.length = 2;

      arrangement();

      lazyLoad();
      function arrangement() {
        var imgArr = $(".img-wrap>img");
        var imgBox = $(".img-wrap");
        imgArr.width(imgBox.width() / 2 - 2) ;
        console.log(imgArr);
        imgArr.each(function(index, item) {
          if (index < 2) {
            columnHeightArr[index] = $(item).position().top + $(item).outerHeight(true);
            $(item).css({
              padding: "1"
            })
          } else {
            var minHeight = Math.min.apply(null, columnHeightArr);
            var minHeightIndex = $.inArray(minHeight, columnHeightArr);
            $(item).css({
              position: 'absolute',
              top: minHeight,
              left: imgArr.eq(minHeightIndex).position().left,
              padding: "1"
            })
            columnHeightArr[minHeightIndex] += $(item).outerHeight(true);
          }
        });
      }


      this.banner.on("scroll", function() {
        if ($(this)[0].scrollTop + $(window).height() - 44 == $(this)[0].scrollHeight) {
          lazyLoad();
          scrollLoad();
        }

      });
      //懒加载
      function lazyLoad() {
        console.log(123);
        var boxArr = $('.img-item');
        boxArr.each(function(index, item) {
          var viewTop = $(item).offset().top - $(document).scrollTop(),
            imgObj = $(item);
          if ((viewTop < $(document).height()) && ($(item).offset().top + $(item).outerHeight(true) > $(document).scrollTop())) {
            //                console.log($(item).attr('data-src'));
            //imgObj.css('backgroundImage', 'url(' + imgObj.attr("data-src") + ')').removeClass('data-src');
            imgObj.css('src', './../img/star1.png');
            $(item).removeClass('img-item');
          }
        })
      }
      ;
      function scrollLoad() {
        var viewHeight = that.banner.scrollTop() + $(document).height(),
          minHeight = Math.min.apply(null, columnHeightArr);
        var flag = true
        if (viewHeight >= minHeight && flag) {
          that.imgBox.append("<img src=\"./../img/star1.png\" class=\"img-item\" data-src=\"\">");
          flag == false;
          arrangement()
        }
      }
    }
  }
  starPic.init();
})
