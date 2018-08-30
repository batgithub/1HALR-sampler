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
    },300)
  })

  $( idClickClose ).click(function(){
    $(idPopup).animate({
      top: elmClickable.offset().top - $(window).scrollTop(),
      left: position.left + margin,
      height:height,
      width: width,
      zIndex:'-1000'
    },300)

    setTimeout(
      function(){
        $(idPopup).css({
          opacity:'0'
        })
    }, 300);

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
