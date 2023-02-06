let chave = "cebcd482eda57fa9a6714c1c2ba91885"
let chaveMapa = "pk.0523d56c2b169f12243fa3e3efc7906e"
let chaveUV = "710c54799a211cc8d6db52b820095764"

const errorCallback = (error) => {
    console.log(error);
  };


function colocarNaTela(dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura:   " + Math.floor(dados.main.temp) + "°F | " + (Math.floor(dados.main.temp - 273.15)) + "°C | " + (Math.floor((dados.main.temp - 273.15) * (9 / 5) + 32)) + "K"
    document.querySelector(".umid").innerHTML = "Umidade:   " + Math.floor(dados.main.humidity) + "%"
    document.querySelector(".desc").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    
    const getHours = () => {
        const horacheia = document.getElementsByClassName("relogio")[0]
        const today = new Date()
        const h = today.getHours()
        const m = today.getMinutes()
        const s = today.getSeconds()
        const hora = h < 10? `0${h}`: h
        const minuto = m < 10? `0${m}` : m
        const segundo = s < 10? `0${s}` : s
        horacheia.innerHTML =`${hora}:${minuto}:${segundo}`

    
       
    }

    setInterval(() => { getHours() }, 1000)
    
    
    const today = new Date()
    const h = today.getHours()
    console.log(h)
    if (h >= 6 && h <= 18){
        document.querySelector(".horadodia").src = "imagens/icons8-sol-48.png"
    } 
    else {
        document.querySelector(".horadodia").src = "imagens/icons8-símbolo-da-lua-48.png"
    }
    

}


async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br"
    )
        .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}


function showPosition(position) {

    var xhr = new XMLHttpRequest();
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  
    console.log(lat)
    console.log(lon)
  
    xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=" + chaveMapa + "&lat=" +lat + "&lon=" + lon + "&format=json",true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);
  
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
              var response = JSON.parse(xhr.responseText);
                cida = response.address.city;
  
                buscarCidade(cida)
            }
        }
  }

  function entreiNaPagina(){
    navigator.geolocation.getCurrentPosition(showPosition,errorCallback);
  }
  