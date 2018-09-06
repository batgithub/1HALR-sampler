// Init var
var pathSounds = "src/audio/"
var animationDuration = 300
var sounds = [
    {name:'le nom du son',file:'mariannerireMoyen',team:'mag'},
    {name:'tu me plait',file: 'MAG-tu-me-plait',team:'mag'},
    {name:'le nom du son3',file: 'mariannerireMoyen',team:'seb'},
    {name:'Trois quatre',file: 'SEB-trois-quatre',team:'seb'}
]



for (var i = 0, len = sounds.length; i < len; i++) {
  if(sounds[i].team == "mag"){
    createButtonSound(i, "#magPop .sounds")
  }
  else if(sounds[i].team == "seb"){
    createButtonSound(i, "#sebPop .sounds")

  }else {
    console.log("team not find");
  }

}


function createButtonSound(iT, idContainer){
  var idSound = "sound-"+i
  var buttonStart = '<button class="button" onclick="playSound(\''+idSound+'\')">'
  var buttonEnd = '</button>'
  var file = pathSounds+sounds[iT].file
  var audio = '<audio preload="auto" id="sound-'+iT+'"><source src="'+ file +'.mp3"></audio>';

  $(idContainer).append(buttonStart+sounds[iT].name+audio+buttonEnd)
}


function playSound(id) {

    var audioClick = $('#'+ id)[0];
    var duration = (audioClick.duration)*1000;
    var timer

    if (audioClick.paused == false) {
        audioClick.pause()
        audioClick.currentTime = 0;
        $(audioClick).parent().removeClass( "active" )
        clearTimeout(timer)

    } else {
      clearTimeout(timer)
      audioClick.play()
      audioClick.onplaying=function(){
          $(audioClick).parent().addClass( "active" );
      };
      timer = setTimeout(
        function(){
          $(audioClick).parent().removeClass( "active" )
          console.log('timeout');
        }, duration)


    }

}
