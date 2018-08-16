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
