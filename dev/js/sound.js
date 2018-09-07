// Init var
var pathSounds = "./src/audio/"
var animationDuration = 300
var sounds = [
    //MAG
    {name:'oui',file:'MAG-oui',team:'mag'},
    {name:'🎤 tu me plaiiiiiiiiiiiiiiiiiit',file: 'MAG-tu-me-plait',team:'mag'},
    {name:'😂 Haaaaa ha',file: 'MAG-rire-ha-ha',team:'mag'},
    {name:'aaaaaheeeuuuu',file: 'MAG-aaaaaheeeuuuu',team:'mag'},
    // {name:'rire aspiré',file: 'MAG-rire-aspire',team:'mag'},
    {name:'🤔 J\'ai changé de raie',file: 'MAG-jai-change-de-raie',team:'mag'},
    {name:'Ça change tout',file: 'MAG-ça-change-tout',team:'mag'},
    {name:'Voilaaaaa hahaha',file: 'MAG-voilaaaaa-hahaha',team:'mag'},
    {name:'😂 Rire gorge deployée',file: 'MAG-rire-gorge-deployee',team:'mag'},
    {name:'Jme baladerais à poils...',file: 'MAG-jme-baladerais-a-poils-toute-la-journee',team:'mag'},
    {name:'😂 heu hein ha ha',file: 'MAG-heu-hein-ha-ha',team:'mag'},
    {name:'Dégage dégage dégage',file: 'MAG-degage-x-3',team:'mag'},
    {name:'mpop mpop hgne',file: 'MAG-mpop-mpop-hgne',team:'mag'},
    {name:'🐱 Oooooooohhhhhh',file: 'MAG-oooooooohhhhh',team:'mag'},
    {name:'Rire gras',file: 'MAG-rire-gras',team:'mag'},
    {name:'🔥 Plaiiiiisiiiiiir',file: 'MAG-plaiisiiiiiir',team:'mag'},
    {name:'Heu ba ouiii',file: 'MAG-euh-ba-ouiiiii',team:'mag'},
    {name:'🤩 Jsuis manageuze de staar',file: 'MAG-manageuze-de-star',team:'mag'},
    {name:'🇩🇪 Mais chaimerais tellement !!!',file: 'MAG-jaimerais-tellement',team:'mag'},
    {name:'J\'ai un talent...',file: 'MAG-talent-beyonce',team:'mag'},
    {name:'J\'aimerais trop qu\il te chie dans la bouche💩 ',file: 'MAG-chie-dans-la-bouche',team:'mag'},
    {name:'👳🏾‍ Wall street english ',file: 'MAG-walstreet-english',team:'mag'},
    {name:'Le mystere du ...🥝 ',file: 'MAG-le-mystere-kiwi',team:'mag'},
    {name:'😂 HI hi hi hi hi',file: 'MAG-hi-hi-hi-hi-hi',team:'mag'},
    {name:'galocher la win',file: 'MAG-galocher-la-win',team:'mag'},
    {name:'Call me Bcrigitte',file: 'MAG-call-me-brigitte',team:'mag'},
    {name:'Pouuuuhouuuuu tu va faire quoi !!!',file: 'MAG-pouuuhouuu-91',team:'mag'},
    {name:'Vengeaaaaaance!!!',file: 'MAG-vengeance',team:'mag'},
    {name:'MOI j\'ai fait du judo! 🥋',file: 'MAG-moi-fait-judo',team:'mag'},

    // SEB
    {name:'🤔 mmmmmmmmm',file: 'SEB-mmmmmmmmm',team:'seb'},
    {name:'Trois quatre',file: 'SEB-trois-quatre',team:'seb'},
    {name:'Jle lache aaaaaap!',file: 'SEB-je-le-lache-Ap-aspire',team:'seb'},
    {name:'Quoiiiiii !!!',file: 'SEB-quoiiiiii',team:'seb'},
    {name:'heuuuummm',file: 'SEB-heuuuummm',team:'seb'},
    {name:'🦆ça va mon bebe',file: 'SEB-ça-va-mon-bebe',team:'seb'},
    // {name:'...Comme si j\'étais la pire des merdes',file: 'SEB-la-pire-des-merdes',team:'seb'},
    {name:'💩 Jsuis pas une merde!!',file: 'SEB-jsuis-pas-une-merde',team:'seb'},
    {name:'Toujours deux versions différentes..',file: 'SEB-toujours-deux-versions-differentes',team:'seb'},
    {name:'Le micro onde c\'est pour les défis personnels',file: 'SEB-le-micro-onde-invention',team:'seb'},
    {name:'🕵️ C\'est un agent que j\'ai retourné',file: 'SEB-agent-retourne',team:'seb'},
    {name:'Régine, y\'a q\'toi qui me comprend',file: 'SEB-regine',team:'seb'},
    {name:'🤑Moi jsuis chaud mais on fait payer!',file: 'SEB-on-fait-payer',team:'seb'},
    {name:'Où est mon émission!',file: 'SEB-mon-emission',team:'seb'},
    {name:'J\'ai attrapé le sida💝',file: 'SEB-attrape-le-sida',team:'seb'},
    {name:'Les gens à qui il manque une jambe',file: 'SEB-jai-rien-contre-les-gens',team:'seb'},
    {name:'🍆🍆🍆 Du sexe à en revendre',file: 'SEB-du-sexe',team:'seb'},
    {name:'Le fuuutuuuurr',file: 'SEB-le-futur',team:'seb'},
    {name:'🥝 La vie c\'est pas un kiwi ',file: 'SEB-la-vie-cest-pas-un-kiwi',team:'seb'},
    {name:'😂 ha ha hi ha hein',file: 'SEB-ha-ha-hi-ha-hein',team:'seb'},
    {name:'T\'es comme une soeur pour moi',file: 'SEB-une-soeur-pour-moi',team:'seb'},
]



var imgStop = new Image();
imgStop.src = './src/imgs/stop.svg';

var imgPlay = new Image();
imgPlay.src = './src/imgs/play.svg';


//generate DOM buttons
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
  var idSound = "sound-"+iT
  var buttonStart = '<button class="button" onclick="playSound(\''+idSound+'\')">'
  var buttonEnd = '</button>'
  var file = pathSounds+sounds[iT].file
  var audio = '<audio preload="auto" id="'+idSound+'"><source src="'+ file +'.mp3"></audio>';
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
        }, duration)


    }

}

console.log("N'hésite pas à contribuer au projet https://github.com/batgithub/1HALR-sampler");
