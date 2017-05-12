$(document).ready(function() {
  var mineLocation = {
    back: $(".header-back-detail"),
    number: $(".list-phoneNumber input"),
    location: $(".list-signature input"),
    init: function() {
      this.goBack();
      this.bindEvent();
    },
    goBack: function() {
      this.back.click(function() {
        window.location.href = "./../main/mine_info.html";
      })
    },
    bindEvent: function() {
      var number = this.number.val();
      var location = this.location.val();
    }
  };
  mineLocation.init();
})
