// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>에서의 (html에서) 그 id속성의 값이 들어간 것. 여기선 #을 붙이면 안됨!
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //id 값 정확히 명시할것. 영상에서 url주소의 v= 뒷부분. (최초 재생할 유튜브 영상 ID)
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' //반복재생할 유튜브 영상 ID 목록, An6LvWQuj_8
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) { // onReady라는 메소드가 실행되면 어떻게 할 건지 작성
        event.target.mute() // 음소거
      }
    }

  });
}