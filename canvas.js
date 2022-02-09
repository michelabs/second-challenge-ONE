desenhaTabuleiro();

function desenhaTabuleiro(){
    var tela = document.getElementById("forca");
    var desenha = tela.getContext("2d");
    desenha.fillStyle = "lightgrey";
    desenha.fillRect(0, 0, 500, 200);
}
 
