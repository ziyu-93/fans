$(document).ready(function() {
  var mineChange = {
    changeName: $(".changeName"),
    back: $(".header-back-detail"),
    store: $(".store"),
    init: function() {
      this.bindEvent();
      this.goBack();
    },
    goBack: function() {
      this.back.on("click", function() {
        window.location.href = "./../main/mine_info.html";
      });
    },
    bindEvent: function() {
      var text;
      this.changeName.on("input", function() {
        text = $(this).val();
        console.log(text);
      });
      this.store.on("click", function() {
        window.location.href = "./../main/mine_info.html";
      })
    }
  };
  mineChange.init();
})
