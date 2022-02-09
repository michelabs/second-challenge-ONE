let tentativas = 7;
let palavraSecretaSorteada;	
let listaDinamica = [];

let palavras = ["BRASIL", "ARGENTINA", "CHILE", "BOLIVIA", "VENEZUELA"];

// inicia o jogo sorteando uma palavra secreta
iniciaJogo();
function iniciaJogo(){
	document.getElementById("iniciar-jogo").addEventListener("click", function(event){
	event.preventDefault;	
	criarPalavraSecreta();
	montarPalavraNaTela();	
	});
}

// sorteia a palavra secreta
function criarPalavraSecreta(){
	const indexPalavra = parseInt(Math.random() * palavras.length);	
	this.palavraSecretaSorteada = palavras[indexPalavra];	
	console.log(this.palavraSecretaSorteada);	
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
	console.log(posicao);
	console.log(this.palavraSecretaSorteada);
	console.log(this.palavraSecretaSorteada.length);
		if(posicao < 0){
			tentativas--;
			console.log(tentativas);
			desenhaCorpo(tentativas);
			if(tentativas == 0) {								
				
			}
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
		mensagemVitoria()
	 location.reload();	
	}
}

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
	console.log(novaPalavra);
	console.log(palavras);
	document.getElementById("input-nova-palavra").value = "";
	}  else alert ("Digite uma palavra válida!");
}

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
			break;
		
	}
}

// desenha oportunidades no canvas
var acessaCanvas = document.getElementById("forca").getContext("2d");

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
	acessaCanvas.filltyle = "red";
	acessaCanvas.beginPath();
	acessaCanvas.arc(60, 40, 20, 0, 2 * Math.PI);
	acessaCanvas.fill();
	mensagemDerrota();
}

function mensagemDerrota(){
	alert ("VOCÊ PERDEU, TENTE NOVAMENTE! A PALAVRA CORRETA ERA: " + this.palavraSecretaSorteada);
	location.reload();	
}

function mensagemVitoria(){
	alert ("VOCÊ GANHOU! PARABÉNS! A PALAVRA CORRETA ERA: " + this.palavraSecretaSorteada);
	location.reload();	
	
}

