
var elemento = document.getElementsByClassName('fold')
var page = 0

botao = document.getElementById('vermais')

function soma(){
  
  if (page <= 48){
  page = page + 1

  }else{
    $(botao).attr('onclick','')
  }
}


function getApi(){
  soma();

  axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
  .then(function(response){
    console.log(response.data)
    
    let charArray = []
    let char = response.data.results;

    for (let i = 0; i < char.length; i++) {

          card = document.createElement('li');
          charArray.push(char[i])
          // console.log(charArray[i])
          nome = (charArray[i].name)
          local = (charArray[i].location.name)
          console.log(local)
          origem = (charArray[i].origin.name)
          console.log(origem)
          charStatus = (charArray[i].status)
          console.log(charStatus)

       
          imagem = (charArray[i].image)

      
          card = document.createElement('li')
          info = document.createElement('div')
          info.className = "info"

          infoNome = document.createElement('p')
          infoNome.className = "name"
          infoLocal = document.createElement('p')
          infoStatus = document.createElement('p')
          infoOrigem = document.createElement('p')
          
      
          $(infoNome).html(`${nome}`)
          $(infoLocal).html(`localização: ${local}`)
          $(infoStatus).html(`${charStatus}`)
          $(infoOrigem).html(`origem: ${origem}`)

          $(card).addClass('card animate__animated animate__fadeIn animate__delay-1s')   
          
          
          $(elemento).append(card)
          $(card).append(`<div class="img"><img src="${imagem}" width="100%"/></div>`)
          $(card).append(info)
          $(info).append(infoNome)
          $(info).append(infoLocal)
          $(info).append(infoStatus)
          $(info).append(infoOrigem)

    }
  })
  .catch(function(error){
    console.log(error);
  })

}

getApi();

const audioPortal = new Audio('./assets/sound/portal-gun-sound-effect.mp3');

function portalInteract(){
  audioPortal.play();
  $('.portal').addClass('animate__animated animate__rubberBand')
  $('.rEm').removeClass('animate__animated animate__zoomIn')
    setTimeout(function(){
      $('.portal').removeClass('animate__animated animate__rubberBand')
      $('.rEm').addClass('animate__animated animate__zoomIn')
    },1000)
}