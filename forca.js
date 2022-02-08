let tentativas = 6;
let palavraSecretaSorteada;	
let listaDinamica = [];

const palavras = ["BRASIL", "ARGENTINA", "CHILE", "BOLIVIA", "VENEZUELA"];

iniciaJogo();


// inicia o jogo sorteando uma palavra secreta
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

function verificarLetraEscolhida(letra){
	if(tentativas > 0){	
	mudarStyleLetra("letra-" + letra);
	compararListas(letra);
	montarPalavraNaTela();	
	}
}

function mudarStyleLetra(tecla){
	document.getElementById(tecla).style.background = "red";
    	document.getElementById(tecla).style.color = "white";
}


function compararListas(letra){
		
	const posicao = this.palavraSecretaSorteada.indexOf(letra);
	console.log(posicao);
	console.log(this.palavraSecretaSorteada);
	console.log(this.palavraSecretaSorteada.length);
	if(posicao < 0){
	tentativas--;
	//aparecer imagem
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
	 alert ("Você ganhou");
	tentativas = 0;
	}	
}




	



