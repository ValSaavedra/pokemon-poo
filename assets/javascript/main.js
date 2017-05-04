function Pokemon(nombre,color,nivelDeAmistad,vida,poderDeAtaque){
	this.nombre = nombre
	this.color = color	
	this.nivelDeAmistad = nivelDeAmistad
	this.vida = vida
	this.poderDeAtaque = poderDeAtaque
	
	this.mostrarPokemon = function(){
		return('Hola, soy: '+ this.nombre + ' y soy de color:' + this.color)
	}

	this.aumentarAmistad = function(valor){
	this.nivelDeAmistad = this.nivelDeAmistad + valor
	}

	this.atacar = function(pokemon){
	pokemon.vida = pokemon.vida - this.poderDeAtaque	}
    }


var pikachu = new Pokemon('Pikachu','amarillo', 10, 30, 20)
var charmander = new Pokemon('Charmander','rojo',10, 30, 10)

pikachu.atacar(charmander)

console.log("La vida de tu Charmander queda en " + charmander.vida)