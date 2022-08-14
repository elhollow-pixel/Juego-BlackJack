/**
 * 2C = TWO OF CLUBS     
 * 2D = TWO OF DIAMINDS
 * 2H = TWO OF HEARTS
 * 2S = TWO OF SPADES 
 */
/*
let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0,
    puntosComputadora = 0;


//Referencias HTML
const btnNuevo            = document.querySelector('#btnNuevo');
const btnPedir            = document.querySelector('#btnPedir');
const btnDetener          = document.querySelector('#btnDetener');
const divCartasJugador    = document.querySelector('#jugador-cartas');
const divCartasComputadra = document.querySelector('#Computadoras-cartas');
const puntosHTML          = document.querySelectorAll('small');

btnDetener.disabled = true;

//crear baraja, revlverla y llenar
const crearDeck = () =>{
    for(let i=2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(i+tipo);
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp+tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

crearDeck();

//Tomar una carta 

const pedirCarta = () =>{

    if(deck.length === 0){
        throw 'No hay cartas en el deck papus';
    }
    let cartaAleatoria = deck[Math.floor(Math.random()*deck.length)];
    let indice = deck.indexOf(cartaAleatoria)
    deck.splice(indice,1);
    return cartaAleatoria;
}



//pedir carta
const valorCarta = (cartaAleatoria) =>{
    //en js los string se pueden leer como array
    const valor = cartaAleatoria.substring(0,cartaAleatoria.length-1);
    /*let puntos = 0;
    console.log({valor});
    //buleano para saber si es un numero o no isnAN
    if(isNaN(valor)){
        puntos = (valor === 'A') ? 11 : 10;
    }else{
        console.log('Es un numero');
        puntos = valor*1; //para retornarlo como un entero
    }
    *
    
    //cuando el color del valor es blanco es un string y mordado entero
    return (isNaN(valor))  ?
           (valor === 'A') ? 11 : 10 
           : valor*1;

}

// TUrno de la computadora 

const turnoComputadora =(puntosMinimos) =>{
    do{
        const carta = pedirCarta();
        puntosComputadora  = puntosComputadora  + valorCarta(carta);
        puntosHTML[1].innerHTML = puntosComputadora ;
    
        //<!--img class="cartas" src="assets/cartas/cartas/2H.png" alt=""-->
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/cartas/${carta}.png`;
        imgCarta.classList.add('cartas');
        divCartasComputadra.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    
    // PERMITE EJECUTAR LA FUNCIONS EN CIERTO TIEMPO PARA 
    // QUE LA OTRA INSTRUCCION O FUNCION SE HAYA EJECUTADO
    setTimeout(() =>{
        if(puntosComputadora === puntosMinimos){
            alert('EMPATE ;V');
        }else if(puntosMinimos > 21){
            alert('PC GANA');
        }else if(puntosComputadora > 21){
            alert('HUMANOS GANA');
        }else{
            alert('PC GANA XDDD');
        }
    },30);
    
}



const ganador = (puntosJugador,puntosComputadora) => {
    if(puntosComputadora<puntosJugador){
        alert('joojiito');
    }
}

//Eventos

btnPedir.addEventListener('click', () => {
    btnDetener.disabled = false;
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerHTML = puntosJugador;
    
    //<!--img class="cartas" src="assets/cartas/cartas/2H.png" alt=""-->
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn("Has perdido carnal "+ puntosJugador);  
        //bloquear el boton con diseable
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if(puntosJugador === 21){
        console.warn('21,genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click',() => {
    console.clear(); //limpiar la consola
    //toco vaciar el deck por caso raro se llenaba con los demas datos
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = '0';
    puntosHTML[1].innerText = '0'

    divCartasComputadra.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnDetener.disabled = false;
    btnPedir.disabled = false;
}); */