var pathSounds = "src/audio/"
var animationDuration = 3000
var sounds = [
    {name:'le nom du son',path: pathSounds+'sdound',team:'mag'},
    {name:'le nom du son2',path:pathSounds+'sdound',team:'mag'},
    {name:'le nom du son3',path:pathSounds+'sdound',team:'seb'},
    {name:'le nom du son4',path:pathSounds+'sdound',team:'seb'}
]

for (var i = 0, len = sounds.length; i < len; i++) {
  if(sounds[i].team == "mag"){
    console.log(sounds[i].path+" team mag");
  }else if(sounds[i].team == "seb"){
    console.log(sounds[i].path+" team seb");
  }else {
    console.log("team not find");
  }

}


toggleSamplePage('#teamSeb','#closePopSeb','#sebPop')
toggleSamplePage('#teamMag','#closePopMag','#magPop')
function toggleSamplePage(idClickStart, idClickClose, idPopup){
  var elmClickable = $(idClickStart);
  var position
  var width
  var height
  var margin
  elmClickable.click(function(){
    position = elmClickable.position();
    width = elmClickable.outerWidth();
    height = elmClickable.outerHeight();
    margin =  parseFloat(elmClickable.css("marginLeft"))

    $( idPopup+' .header,' + idPopup+ ' .sounds' ).animate({
      opacity:'1'
    },animationDuration)

    setTimeout(
      function(){
      $( idPopup+' .header').css({
        position:'fixed'
      })
    }, animationDuration+10);

    $( idPopup ).css({
      opacity:'1',
      height:height,
      width: width,
      zIndex: '1000',
      top: elmClickable.offset().top - $(window).scrollTop(),
      left: position.left + margin
    })

    $(idPopup).animate({
      top:'0',
      left:'0',
      width:'100%',
      height:'100%',
      opacity:'1'
    },animationDuration)
  })




  $( idClickClose ).click(function(){

    $( idPopup+' .header').css({
      position:'absolute'
    })


    $(idPopup).animate({
      top: elmClickable.offset().top - $(window).scrollTop(),
      left: position.left + margin,
      height:height,
      width: width,
      zIndex:'-1000'
    },animationDuration)


    $( idPopup+' .header,' + idPopup+ ' .sounds' ).animate({
      opacity:'0'
    },animationDuration)


    setTimeout(
      function(){
      $(idPopup).removeAttr("style")
      $( idPopup+' .header'+ idPopup+ ' .sounds' ).removeAttr("style")
    }, animationDuration+10);

  })

}

function loader() {
    $("button").each(
        function(){
            var file = $(this).data('file');
            var audio = '<audio preload="auto" id="'+file +'"><source src="./src/audio/'+ file +'.mp3"><span>'+ +'</span></audio>';
            var dure = '<span>'+ $('#'+ file)+'</span>';

            var b = $('#'+ file);

            $(this).append(audio);
        }

    )
}

function playSound(id) {

    var audioClick = $('#'+ id)[0];
    var duration = (audioClick.duration)*1000;

    audioClick.play();
    audioClick.onplaying=function(){
        $(audioClick).parent().addClass( "active" );
    };

    setTimeout(function(){ $(audioClick).parent().removeClass( "active" );}, duration);

}
