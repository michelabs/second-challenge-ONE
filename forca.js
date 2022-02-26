let tentativas = 7;
let palavraSecretaSorteada;	
let listaDinamica = [];

let palavras = ["BRASIL", "ARGENTINA", "COLOMBIA", "PERU", "CHILE", "EQUADOR", "BOLIVIA", "VENEZUELA", "GUIANA", "URUGUAI", "PARAGUARI", "SURININAME"];

// inicia o jogo sorteando uma palavra secreta
iniciaJogo();
function iniciaJogo(){
	document.getElementById("iniciar-jogo").addEventListener("click", function(event){
	event.preventDefault;	
	criarPalavraSecreta();
	montarPalavraNaTela();
	informaDica();	
	});
}

// sorteia a palavra secreta
function criarPalavraSecreta(){
	const indexPalavra = parseInt(Math.random() * palavras.length);	
	this.palavraSecretaSorteada = palavras[indexPalavra];	
	//console.log(this.palavraSecretaSorteada);	
}

// monta a quantidade de traços na tela
function montarPalavraNaTela(){		
	const palavraTela = document.getElementById("palavra-secreta");
	palavraTela.innerHTML = "";	

	for(i = 0; i < this.palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }	
}

// chega se a letra escolhida, faz parte da palavra secreta
function verificarLetraEscolhida(letra){
	if(tentativas > 0){	
	mudarStyleLetra("letra-" + letra);
	compararListas(letra);
	montarPalavraNaTela();	
	}
}

// muda o estilo da letra, quando a letra é escolhida
function mudarStyleLetra(tecla){
	document.getElementById(tecla).style.background = "red";
    document.getElementById(tecla).style.color = "white";
}

// método para comparação entre a palavra secreta, e o array temporário armazenado na lista dinâmica
function compararListas(letra){		
	const posicao = this.palavraSecretaSorteada.indexOf(letra);
	//console.log(posicao);
	//console.log(this.palavraSecretaSorteada);
	//console.log(this.palavraSecretaSorteada.length);
		if(posicao < 0){
			tentativas--;
			//console.log(tentativas);
			desenhaCorpo(tentativas);			
		} else {
			for (i = 0; i < this.palavraSecretaSorteada.length; i++) {	
				if (this.palavraSecretaSorteada[i] == letra){
				listaDinamica[i] = letra;			
				}
			}
		}

	let vitoria = true;
	for (i = 0; i < this.palavraSecretaSorteada.length; i++){
		if (this.palavraSecretaSorteada[i] != listaDinamica[i]){
			vitoria = false;			
		}		
	}

	if (vitoria == true){
		mensagemVitoria();	 
	}
}

// desenha oportunidades no canvas
var acessaCanvas = document.getElementById("forca").getContext("2d");

function desenhaCorpo(tentativas){
	switch(tentativas){
		case 6:
			desenhaCabeca();
			desenhaTronco();
			break;
		case 5:
			desenhaBracoEsq();
			break;
		case 4:
			desenhaBracoDir();
			break;
		case 3:
			desenhaPernaEsq();
			break;
		case 2:
			desenhaPernaDir();
			break;
		case 1:
			desenhaCabecaComX();		
			mensagemDerrota();	
			break;
		
	}
}

function desenhaCabeca(){
	acessaCanvas.beginPath();
	acessaCanvas.arc(60, 40, 20, 0, 2 * Math.PI);
	acessaCanvas.stroke();	
}

function desenhaTronco(){
	acessaCanvas.moveTo(60, 60);
	acessaCanvas.lineTo(60, 120);
	acessaCanvas.stroke();
}

function desenhaBracoEsq(){
	acessaCanvas.moveTo(60, 60);
	acessaCanvas.lineTo(40, 90);
	acessaCanvas.stroke();
}

function desenhaBracoDir(){
	acessaCanvas.moveTo(60, 60);
	acessaCanvas.lineTo(80, 90);
	acessaCanvas.stroke();
}

function desenhaPernaEsq(){
	acessaCanvas.moveTo(60, 120);
	acessaCanvas.lineTo(40, 150);
	acessaCanvas.stroke();
}

function desenhaPernaDir(){
	acessaCanvas.moveTo(60, 120);
	acessaCanvas.lineTo(80, 150);
	acessaCanvas.stroke();
}

function desenhaCabecaComX(){	
	acessaCanvas.fillStyle = "red";
	acessaCanvas.beginPath();
	acessaCanvas.arc(60, 40, 20, 0, 2 * Math.PI);
	acessaCanvas.fill();
	
}

function informaDica(){
	acessaCanvas.font ="20px Georgia";
	acessaCanvas.fillStyle ="black"
	acessaCanvas.fillText("A dica é: país", 200, 50);
}

function mensagemDerrota(){
	acessaCanvas.font="20px Georgia";
	acessaCanvas.fillStyle ="red"
	acessaCanvas.fillText("VOCÊ PERDEU!", 200, 100);
	acessaCanvas.fillText("A PALAVRA CORRETA ERA:", 200, 130); 
	acessaCanvas.fillText(this.palavraSecretaSorteada, 200, 160)	
}

function mensagemVitoria(){
	acessaCanvas.font="20px Georgia";
	acessaCanvas.fillStyle ="green"
	acessaCanvas.fillText("PARABÉNS, VOCÊ ACERTOU!", 200, 100);	
	
}

// funcões para inserir novas palavras dentro do jogo para possível seleção

// método para inserir palavras
adicionaPalavraNoArray();
function adicionaPalavraNoArray(){
	document.getElementById("nova-palavra").addEventListener("click", function(){	
	identificaNovaPalavra();
	});
}

// método para identifica nova palavra
function identificaNovaPalavra(){
	var novaPalavra = document.getElementById("input-nova-palavra").value;
	if(novaPalavra != ""){
	palavras.push(novaPalavra);
	//console.log(novaPalavra);
	//console.log(palavras);
	document.getElementById("input-nova-palavra").value = "";
	}  else alert ("Digite uma palavra válida!");
}

