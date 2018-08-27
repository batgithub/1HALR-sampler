var teamSeb = $( "#teamSeb" );
var position
var width
var height
var margin
var titlePosition


teamSeb.click(function(){
  position = teamSeb.position();
  width = teamSeb.outerWidth();
  height = teamSeb.outerHeight();
  margin = teamSeb.css("marginLeft");
  titlePosition = $( "#titleSeb" ).position();

  $( "#sebPop" ).css({
    opacity:'1',
    height:height,
    width: width,
    zIndex: '1000',
    top: teamSeb.offset().top - $(window).scrollTop(),
    left: position.left + margin
  })
  $( "#titlePop" ).css({
  })
  $( "#sebPop" ).animate({
    top:'0',
    left:'0',
    width:'100%',
    height:'100%',
    opacity:'1'
  },300)
})

$( "#closePop" ).click(function(){
  console.log("click close");
  $( "#sebPop" ).animate({
    top: teamSeb.offset().top - $(window).scrollTop(),
    left: position.left + margin,
    height:height,
    width: width,
    zIndex:'-1000'
  },300)

  setTimeout(
    function()
    {
      $( "#sebPop" ).css({
        opacity:'0'
      })
  }, 300);

})

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
