
function VerificaIgual(){

 	let valor1 = Number(prompt("Digite o primeiro numero"));
	let valor2 = Number(prompt("Digite o segundo numero"));
	let resultado = (valor1 === valor2);
	alert(resultado);
}


function VerificaIgualTexto(){

 	let valor1 = prompt("Digite o primeiro texto");
	let valor2 = prompt("Digite o segundo texto");
	let resultado = (valor1 === valor2);
	alert(resultado);
}


function VerificaDiferente(){

 	let valor1 = prompt("Digite o primeiro numero");
	let valor2 = prompt("Digite o segundo numero");
	let resultado = (valor1 !== valor2);
	alert(resultado);
}


function VerificaMaior(){

 	let valor1 = prompt("Digite o primeiro numero");
	let valor2 = prompt("Digite o segundo numero");
	let resultado = (valor1 > valor2);
	alert(resultado);
}


function VerificaMaiorIgual(){

 	let valor1 = prompt("Digite o primeiro numero");
	let valor2 = prompt("Digite o segundo numero");
	let resultado = (valor1 >= valor2);

	if (resultado === true){
	alert(valor1+' é maior ou igual a '+valor2);
	}else {
		alert(valor1+' é menor '+valor2);
	}

}


function VerificaMenor(){

 	let valor1 = prompt("Digite o primeiro numero");
	let valor2 = prompt("Digite o segundo numero");
	let resultado = (valor1 < valor2);
	alert(resultado);
}

function VerificaMenorIgual(){

 	let valor1 = prompt("Digite o primeiro numero");
	let valor2 = prompt("Digite o segundo numero");
	let resultado = (valor1 <= valor2);
	alert(resultado);
}
