
var video = document.getElementById("videoLogo");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 600);

});

window.onload = function() {
  window.setTimeout(fadeout, 8000); //8 seconds
}

function fadeout() {
  document.getElementById('fadeout').style.opacity = '1';
};

$(document).ready(function() {
	
	$('.btn').delay(400).queue(function(next) {
		$(this).addClass('hover').delay(1800).queue(function(next) {
			$(this).removeClass('hover');
		});
		next();
	});
});

if (isMobile) {
      $("videoLogo").find('video').attr('poster', 'img/logo.svg');
}
