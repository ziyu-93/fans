let newDetailReply = {
  topRight: $(".top-rigth"),
  itemRight: $(".item-right"),
  init() {
    FastClick.attach(document.body);
    tools.goback();
    this.itemWidth();
  },
  itemWidth: function() {
    this.topRight.width($(document).width() - 73 - 26);
    this.itemRight.width($(document).width() - 73 - 26);
  }
};
newDetailReply.init();
