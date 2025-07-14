// Carrega o vídeo baseado no parâmetro da URL
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const videoURL = urlParams.get('video');
  const iframe = document.getElementById('videoFrame');

  if (videoURL) {
    iframe.src = videoURL;
  } else {
    iframe.outerHTML = "<p>Vídeo não encontrado.</p>";
  }
};
