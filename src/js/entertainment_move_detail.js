let moveDetail = {
  video: $(".video-item"),
  init() {
    tools.goback();
    this.video.on("click", function() {
      window.location.href = "./../main/mine_tv_detail.html";
    })
  }
}
moveDetail.init();
