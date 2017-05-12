$(document).ready(function() {
  var starRoute = {
    listTitle: $(".list-title"),
    monthChange: $(".bottom-title"),
    month: $(".month"),
    year: $(".year"),
    routeList: $(".list-item"),
    text: $(".rigth-text"),
    time: $(".time"),
    week: $(".week"),
    init: function() {
      tools.goback();
      this.stroke();
      this.bindEvent();
    },
    bindEvent: function() {
      var that = this;
      //省略文字
      this.listTitle.width(this.listTitle.parents(".list-item").width() - this.listTitle.parent().siblings().width() - 25);
      console.log(this.listTitle.width());
      //月份变化
      this.monthChange.on("click", "li", function() {
        console.log(123);
        if ($(this).attr("class") == "right") {
          console.log("右边");
          // console.log(typeof (that.month.text() * 1));
          if (that.month.text() * 1 >= 9) {
            that.month.text((that.month.text() * 1) + 1);
            if (that.month.text() * 1 > 12) {
              console.log(that.year.text())
              that.year.text((that.year.text() * 1) + 1);
              that.month.text("01");
            }
          } else if (that.month.text() * 1 < 10) {
            that.month.text("0" + ((that.month.text() * 1) + 1));
          }
        } else if ($(this).attr("class") == "left") {
          console.log("左边");
          if (that.month.text() * 1 == 1) {
            that.month.text("12");
            that.year.text((that.year.text() * 1) - 1);
          } else if (that.month.text() < 11) {
            that.month.text("0" + ((that.month.text() * 1) - 1));
          } else {
            that.month.text((that.month.text() * 1) - 1);
          }
        }
      })
    },
    stroke: function() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var monthDay = date.getDate();
      var day = date.getDay();
      var nowTime = year + "-" + (month + 1) + "-" + monthDay + "-" + day
      //console.log(nowTime);
      this.year.html(year);
      var routeMonth = month + 1;
      var routeDay = monthDay;
      if (month + 1 < 10) {
        this.month.html("0" + routeMonth);
      } else {
        this.month.html(routeMonth);
      }
      var imgList = this.routeList.find("img");
      var textList = this.routeList.find(".list-title");
      //console.log(Array.prototype.slice.call(imgList));
      var srcArr = [];
      var numArr = [];
      var weekDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      for (var i = 0; i < imgList.length; i++) {
        srcArr.push(imgList[i].src);
      }
      //console.log(srcArr);
      for (var i = 0; i < srcArr.length; i++) {
        var a = srcArr[i].indexOf(".");
        numArr.push(srcArr[i].slice(a - 2, a));
      }
      //console.log(numArr);
      for (var i = 0; i < numArr.length; i++) {
        if ((numArr[i] * 1 - monthDay) >= 0) {
          //图片改变颜色
          imgList[i].src = "./../img/show" + numArr[i] + ".png";
          //改变内容
          this.text.html(textList[i].innerHTML);
          //时间判断，改变下次行程时间
          if (month + 1 < 10) {
            routeMonth = "0" + (month + 1);
          } else {
            routeMonth = month + 1;
          }
          if (numArr[i] * 1 < 10) {
            routeDay = "0" + (numArr[i] * 1);
          } else {
            routeDay = numArr[i] * 1;
          }
          this.time.html(year + "-" + routeMonth + "-" + routeDay);
          console.log(this.time.html());
          //获取星期
          var nowDate = new Date(year, month, numArr[i] * 1);
          this.week.html(weekDay[nowDate.getDay()]);
          return;
        }
      }


    }
  }
  starRoute.init();
})
