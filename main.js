
var elemento = document.getElementsByClassName('fold')
var page = 0

botao = document.getElementById('vermais')

function soma(){
  
  if (page <= 48){
  page = page + 1
  console.log(botao)

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

          lista = document.createElement('li');
          charArray.push(char[i])
          // console.log(charArray[i])
          nome = (charArray[i].name)
          console.log(nome)
          imagem = (charArray[i].image)
          console.log(imagem)
      
          lista = document.createElement('li')
          listaNome = document.createElement('p')
          
      
          $(listaNome).html(nome)
          $(lista).addClass('card animate__animated animate__fadeIn animate__delay-1s')   
          $(lista).append(listaNome)
          
          $(elemento).append(lista)
          $(lista).append(`<img src="${imagem}" width="100%"/>`)

    }
  })
  .catch(function(error){
    console.log(error);
  })

}

getApi();










// urls.forEach(url => {
//   requests.push(axios.get(url));
// });
// axios.all(requests)

// .then(axios.spread((...responses) => {
//     responses.forEach(response =>{

//         console.log(response.data.results)


//         // var char = response.data.results;

//         // for (var i = 0; i < char.length; i++) {
        
//         //     lista = document.createElement('li');
            
//         //     charArray.push(char[i])
//         //     // console.log(charArray[i])
//         //     nome = (charArray[i].name)
//         //     console.log(nome)
//         //     imagem = (charArray[i].image)
//         //     console.log(imagem)
        
//         //     lista = document.createElement('li')
//         //     listaNome = document.createElement('p')
            
        
//         //     $(listaNome).html(nome)
//         //     $(lista).append(listaNome)
            
//         //     $(elemento).append(lista)
//         //     $(lista).append(`<img src="${imagem}" width="100%"/>`)
        
        
//         // }


//     })
// }))
// .catch(function(error){
//     console.log(error);
// })




