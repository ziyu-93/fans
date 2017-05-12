$(document).ready(function() {
  var mineActivity = {
    back: $(".header-back-detail"),
    init: function() {

      this.goBack();
    },
    goBack: function() {
      this.back.on("click", function() {
        window.history.go(-1);
      })
    }
  }
  mineActivity.init();
})
