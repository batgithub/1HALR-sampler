// Init var
var pathSounds = "./src/audio/"
var animationDuration = 300
var sounds = [
    //MAG
    {name:'oui',file:'MAG-oui',team:'mag'},
    {name:'tu me plaiiiiiiiiiiiiiiiiiit',file: 'MAG-tu-me-plait',team:'mag'},
    {name:'Haaaaa ha',file: 'MAG-rire-ha-ha',team:'mag'},
    {name:'aaaaaheeeuuuu',file: 'MAG-aaaaaheeeuuuu',team:'mag'},
    {name:'rire aspiré',file: 'MAG-rire-aspire',team:'mag'},
    {name:'J\'ai changé de raie',file: 'MAG-jai-change-de-raie',team:'mag'},
    // SEB
    {name:'mmmmmmmmm',file: 'SEB-mmmmmmmmm',team:'seb'},
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
  var buttonStart = '<button class="button loading" onclick="playSound(\''+idSound+'\')">'
  var buttonEnd = '</button>'
  var file = pathSounds+sounds[iT].file
  var audio = '<audio preload="auto" id="sound-'+iT+'"><source src="'+ file +'.mp3"></audio>';
  $(idContainer).append(buttonStart+sounds[iT].name+audio+buttonEnd)

  $('#'+idSound).on('canplaythrough', function() {
    $(this).parent().removeClass("loading")
    $(this).parent().addClass("play")
  });

  if ($('#'+idSound)[0].readyState > 3) {
    $(this).parent().removeClass("loading")
    $(this).parent().addClass("play")
  }

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
