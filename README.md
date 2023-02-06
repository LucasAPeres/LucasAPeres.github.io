# LucasAPeres.github.io
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="favicon/nuvem.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <script src="scripts.js"></script>
    <title>Temperanuvem</title>
</head>


<body onload="entreiNaPagina()">
    <div class="caixa-maior">

        <input class="input-cidade" placeholder="Cidade">
        <button onclick="cliqueiNoBotao()"><img class="lupa"
                src="https://www.cabodesantoagostinho.pe.leg.br/imagens/lupa2.png/image" alt="lupa"></button>

        <div class="caixa-media">
            <h2 class="city">Cidade</h2>
            <div class="container">
                <p class="bsb">Horário de local</p>
                <div class="relogio"></div>
              </div>
            <br>
            <p class="temp"> Temperatura </p>

            <div class="caixa-menor">
                <p class="desc" Nublado></p>
                <img class="icone" src="https://openweathermap.org/img/wn/04n.png">
            </div>
                <img class = "horadodia">

            <p class="umid">Umidade do ar</p>
        </div>
    </div>

</body>

</html>
