$(document).ready(function() {
  var mineReleaseMailbox = {
    back: $(".header-back-detail"),
    init: function() {
      this.goBack();
    },
    goBack: function() {
      this.back.click(function() {
        window.location.href = "./../main/mine_info.html";
      })
    }
  };
  mineReleaseMailbox.init();
})
