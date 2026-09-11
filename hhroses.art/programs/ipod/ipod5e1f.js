document.addEventListener('DOMContentLoaded', function() {
  const songTitle = document.getElementById('song-title');
  const artistName = document.getElementById('artist-name');
  const albumName = document.getElementById('album-name');
  const albumArt = document.getElementById('album-art');
  const progressFill = document.getElementById('progress-fill');
  const currentTimeEl = document.getElementById('current-time');
  const totalTimeEl = document.getElementById('total-time');
  const playIcon = document.getElementById('play-icon');

  let currentSongIndex = 0;
  let player;
  let timeUpdateInterval;

  const songs = [
    { title: "Conquest", artist: "hhroses", album: "Singles", ytId: "uvD-K6Oa-98", art: "https://hhroses.art/my-pictures/album_art/ConquestByHHROSESAlbumArt.png" },
    { title: "PlayStation", artist: "hhroses", album: "Singles", ytId: "vgKjeh3iJjE", art: "https://hhroses.art/my-pictures/album_art/PlayStationByHHROSESAlbumArt.png" },
    { title: "Weeping Angels", artist: "hhroses", album: "Singles", ytId: "lNJLR2zPcUc", art: "https://hhroses.art/my-pictures/album_art/WeepingAngelsByHHROSESAlbumArt.png" },
    { title: "Adventure Time", artist: "hhroses", album: "Singles", ytId: "ECYBmakqgmY", art: "https://hhroses.art/my-pictures/album_art/AdventureTimeByHHROSES.png" },
    { title: "crystal cave", artist: "hhroses", album: "Singles", ytId: "H3pyLhbtzlg", art: "https://hhroses.art/my-pictures/album_art/crystal-caves.png" },
    { title: "DUNGEON", artist: "hhroses", album: "Singles", ytId: "fMnOAXdhqMU", art: "https://hhroses.art/my-pictures/album_art/DUNGEON-HHROSES.png" },
    { title: "I FEEL STRANGE", artist: "hhroses", album: "Singles", ytId: "8b3jBHfflDw", art: "https://hhroses.neocities.org/my-pictures/album_art/i-feel-strange.gif" },
    { title: "SAVE", artist: "hhroses", album: "Singles", ytId: "i1wSKHNENIM", art: "https://hhroses.art/my-pictures/album_art/SAVEHHROSES.gif" },
    { title: "citadel", artist: "hhroses", album: "Singles", ytId: "SOy4r0KE7fg", art: "https://hhroses.art/my-pictures/album_art/citadel.gif" },
    { title: "im sad but its ok i guess", artist: "hhroses", album: "Singles", ytId: "CP_j-cEYBVQ", art: "https://hhroses.art/my-pictures/album_art/i'm%20sad%20but%20its%20ok%20i%20guess.gif" }
  ];

  function formatTime(seconds) {
    if (!seconds) return "0:00";
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }

  function updateUI() {
    songTitle.textContent = songs[currentSongIndex].title;
    artistName.textContent = songs[currentSongIndex].artist;
    albumName.textContent = songs[currentSongIndex].album;
    albumArt.src = songs[currentSongIndex].art;
  }

  // Define the callback for when the API loads
  window.onYouTubeIframeAPIReady = function() {
    updateUI();
    player = new YT.Player('yt-player', {
      height: '200',
      width: '200',
      videoId: songs[currentSongIndex].ytId,
      playerVars: {
        'playsinline': 1,
        'controls': 0,
        'disablekb': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };

  // Safely inject the YouTube API script
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  if (firstScriptTag && firstScriptTag.parentNode) {
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else {
    document.head.appendChild(tag);
  }

  function onPlayerReady(event) {
    totalTimeEl.textContent = '-' + formatTime(player.getDuration());
    player.unMute();
    player.setVolume(100);
  }

  function onPlayerStateChange(event) {
    if (event.data === 1) { // Playing
      if (playIcon) playIcon.textContent = '❚❚';
      totalTimeEl.textContent = '-' + formatTime(player.getDuration());
      
      clearInterval(timeUpdateInterval);
      timeUpdateInterval = setInterval(updateProgress, 500);
    } 
    else { // Paused or Ended
      if (playIcon) playIcon.textContent = '▶';
      clearInterval(timeUpdateInterval);
    }

    if (event.data === 0) { // Auto-play next
      window.nextSong();
    }
  }

  function updateProgress() {
    if (player && player.getDuration) {
      var duration = player.getDuration();
      var currentTime = player.getCurrentTime();
      if (duration > 0) {
        var percent = (currentTime / duration) * 100;
        progressFill.style.width = percent + '%';
        currentTimeEl.textContent = formatTime(currentTime);
        totalTimeEl.textContent = '-' + formatTime(duration - currentTime);
      }
    }
  }

  function loadSong(index) {
    if (index >= 0 && index < songs.length) {
      currentSongIndex = index;
      updateUI();
      
      progressFill.style.width = '0%';
      currentTimeEl.textContent = '0:00';
      
      if (player && player.loadVideoById) {
        player.loadVideoById(songs[index].ytId);
      }
    }
  }

  window.togglePlayPause = function() {
    if (!player || !player.getPlayerState) return;
    
    if (player.getPlayerState() === 1) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  window.nextSong = function() {
    loadSong((currentSongIndex + 1) % songs.length);
  };

  window.previousSong = function() {
    loadSong((currentSongIndex - 1 + songs.length) % songs.length);
  };
});