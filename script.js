var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'cigVYVL7f1s',
    events: {
      'onReady': onPlayerReady
    },
    playerVars: {
      'controls': 0,
      'showinfo': 0,
      'modestbranding': 1
    }
  });
}

function onPlayerReady(event) {
  document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('thumbnail').style.display = 'none';
    document.getElementById('player').style.display = 'block';

    var iframe = event.target.getIframe();
    iframe.style.width = '1px';
    iframe.style.height = '1px';

    event.target.playVideo();
  });
}
