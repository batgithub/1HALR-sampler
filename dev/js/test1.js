var teamSeb = $( "#teamSeb" );
var position = teamSeb.position();
var width = teamSeb.outerWidth();
var height = teamSeb.outerHeight();
var margin = teamSeb.css("marginLeft");

console.log(position);
console.log(width);
console.log(height);
console.log(margin);
console.log("aaaadazzml");

teamSeb.click(function(){
  $( "#sebPop" ).css({
    display:'block',
    height:height,
    width: width,
    zIndex: '1000',
    top: position.top,
    left: position.left + margin
  })
  $( "#sebPop" ).animate({
    top:'0',
    left:'0',
    width:'100%',
    height:'100%'
  },300)
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
