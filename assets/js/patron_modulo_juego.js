//Sintaxis del patron modulo nos brinda seguridad para que 
//no se tenga acceso de las variable ycodigo al usuario
/*funcion anonima autoinvocadas
(() => {

})();
//lo mismo 
(function() {

})() */

const miModulo = (() => {
    'use strict'; // le indica a JS que jusgue el codigo de forma estricta
   // const personajes = ['Anna', 'Mercy','Marcos'];
    //console.log(personajes);

    let deck = [];
    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];
      
    let puntosJugadores = [];   

    //Referencias
    const btnNuevo   = document.querySelector('#btnNuevo'),
          btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const divCartas  = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');



    //Esta funcion inicialia el juego
    const inicializarJuego = (numJugadores = 2) =>{
        deck = crearDeck();
        puntosJugadores = [];
        for(let i= 0; i<numJugadores;i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartas.forEach(elem => elem.innerHTML = '');
        /*puntosHTML[0].innerText = '0';
        puntosHTML[1].innerText = '0' y vaciar los div de cartas*/

        btnDetener.disabled = false;
        btnPedir.disabled = false;
    }

    //crear baraja, revlverla y llenar
    const crearDeck = () =>{
        deck = []; //reiniciamos el deck
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
        
        return _.shuffle(deck);
    }

  
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



    //pedir el valor de la carta 
    const valorCarta = (cartaAleatoria) =>{
        //en js los string se pueden leer como array
        const valor = cartaAleatoria.substring(0,cartaAleatoria.length-1);
        return (isNaN(valor))  ?
               (valor === 'A') ? 11 : 10 
                               : valor*1;

    }

    //0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno]  = puntosJugadores[turno]  + valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        //<!--img class="cartas" src="assets/cartas/cartas/2H.png" alt=""-->
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('cartas');
        divCartas[turno].append(imgCarta);
       
    }

    // TUrno de la computadora 
    const turnoComputadora = (puntosMinimos) =>{
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
            crearCarta(carta,puntosJugadores.length-1);

        }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));   
        determinarGanador();
    }
    
    const determinarGanador = () => {
        //destructuracion se extrae del array segun la posicion
        const [puntosMinimos,puntosComputadora] = puntosJugadores;
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
        },100);
    }

    //Eventos

    btnPedir.addEventListener('click', () => {
        //los eventos son codigos limpios a si que hacer funcones e invocarlas
        btnDetener.disabled = false;
        const carta = pedirCarta();
        const puntosJugador =  acumularPuntos(carta, 0);
        crearCarta(carta,0);

        if(puntosJugador > 21){
            console.warn("Has perdido carnal "+ puntosJugador);  
            //bloquear el boton con diseable
            btnPedir.disabled = true;puntosJugadores
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
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click',() => {
        //toco vaciar el deck por caso raro se llenaba con los demas datos
        inicializarJuego();
    }); 

    /*todo lo que se retorne de esta funcion 
     sera publico el resto privado*/

    return{
        //nuevoJuego: inicializarJuego
        //nuevo: acumularPuntos
        
    };
})();

