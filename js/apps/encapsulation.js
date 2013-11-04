/*
  Zdefiniuj klase Video, ktora posiada metody:
  + publiczne: play(), stop()
  + prywatna: _showProgressbar(), wywolywana wewnatrz play()
  + uprzywilejowana: getId()
* */
function main() {
  var video = new Video("uniq-id");
  video.play();
  video.stop();
  video.getId();
}
