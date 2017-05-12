/**
 * Created by bai on 2017/3/15.
 */
$(document).ready(function() {
  let star = {
    search: $(".banner-top img:nth-of-type(2)"),
    imgItem: $(".bottom-list"),
    classList: $(".bottom-list"),
    init() {
      this.bindEvent();
      tools.loodding();
      tools.back_top();
    },
    bindEvent() {
      this.imgItem.on("click", ".item", function() {
        window.location.href = "./../main/star_detail.html";
      });
      this.search.on("click", function() {
        window.location.href = "./../main/star_search.html";
      })
    }
  }
  star.init();
})
