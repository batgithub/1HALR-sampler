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
      $( 'body' ).css({
        position:'fixed',
        width:'100%'
      })
    }, animationDuration+10);


    $( idPopup ).css({
      opacity:'1',
      height:height,
      width: width,
      zIndex: '1000',
      borderRadius: 6,
      top: elmClickable.offset().top - $(window).scrollTop(),
      left: position.left + margin
    })

    $(idPopup).animate({
      top:'0',
      left:'0',
      width:'100%',
      height:'100%',
      borderRadius: 0,
      opacity:'1'
    },animationDuration)
  })


  $( idClickClose ).click(
    function(){
      $( idPopup+' .header').css({
        position:'absolute'
      })

      $(idPopup).animate({
        top: elmClickable.offset().top - $(window).scrollTop(),
        left: position.left + margin,
        height:height,
        width: width,
        borderRadius: 6,
        zIndex:'-1000'
      },animationDuration)


      $( idPopup+' .header,' + idPopup+ ' .sounds' ).animate({
        opacity:'0'
      },animationDuration)


      setTimeout(
        function(){
        $(idPopup).removeAttr("style")
        $( idPopup+' .header'+ idPopup+ ' .sounds' ).removeAttr("style")
        $( 'body' ).removeAttr("style")
      }, animationDuration+10);
    }
  )
}
