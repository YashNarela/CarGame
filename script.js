var audio = document.createElement("audio");
audio.setAttribute("src", "sound.mp3");
audio.loop = true;

audio.play().catch((error) => {
  console.error("Audio playback failed:", error);
});
