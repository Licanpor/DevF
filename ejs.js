for(i=0; i<=50; i++){

	if(i%3 == 0 && i%5 == 0){
		console.log('multiplos de ambos: ' + i + ' FizzBuzz');
	}else  if(i%3 == 0){
		console.log('multiplos de 3: ' + i + ' Fizz');
	}else  if(i%5 == 0){
		console.log('multiplos de 5: ' + i + ' Buzz');
	}else {
		console.log('ningun0: ' + i);
	}
}


for (var i = 1; i <= 3; i++) {
 	var jugador1 = prompt("Jugador 1, Elija una opcion: 1=piedra, 2=papel, 3=tijera");
	jugador1 = Number(jugador1);
	var jugador2 = prompt("Jugador 2, Elija una opcion: 1=piedra, 2=papel, 3=tijera");
	jugador2 = Number(jugador2);
	jugar(jugador1, jugador2);

	
 }
	function jugar(jugador1, jugador2){
	if(jugador1 === jugador2){
		document.write("Empate");
	}
 	if((jugador1 === 2) && (jugador2 === 1)){
	 	document.write("Gana Papel ");
	 } 
	if((jugador1 === 1) && (jugador2 === 3)){
	 	document.write("Gana Piedra ");
	 }
	if((jugador1 === 3) && (jugador2 === 2)){
	 	document.write("Gana Tijera ");
	 }
 }

// ============================================

// ========= PALINDROMO =======================
var frase = prompt('ingresa palabra');
	frase.toLowerCase().split(' ').join('');

