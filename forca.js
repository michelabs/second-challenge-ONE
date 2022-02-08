let tentativas = 6;
let palavraSecretaSorteada;	
let listaDinamica = [];

const palavras = ["BRASIL", "ARGENTINA", "CHILE", "BOLIVIA", "VENEZUELA"];

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
			if(tentativas == 0) {
				alert ("Você perdeu! a palavra correta era: " + this.palavraSecretaSorteada)
				location.reload();
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
	 alert ("Você ganhou! A palavra correta era: " + this.palavraSecretaSorteada);
	 location.reload();	
	}
}




	



