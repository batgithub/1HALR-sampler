function loader(){$("button").each(function(){var file=$(this).data("file"),audio='<audio preload="auto" id="'+file+'"><source src="./src/audio/'+file+'.mp3"><span>NaN';$("#"+file),$("#"+file);$(this).append(audio)})}function playSound(id){var audioClick=$("#"+id)[0],duration=1e3*audioClick.duration;audioClick.play(),audioClick.onplaying=function(){$(audioClick).parent().addClass("active")},setTimeout(function(){$(audioClick).parent().removeClass("active")},duration)}
//# sourceMappingURL=app.js.map