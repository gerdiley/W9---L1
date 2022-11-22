let estratto: number;
let giocatore1: number;
let giocatore2: number;



giocatore1 = estrai();
console.log('numero giocatore 1 = ', giocatore1);

giocatore2 = estrai();
console.log('numero giocatore 2 = ', giocatore2);

estratto  = estrai();
console.log('Numero estratto = ', estratto);


calcola();

function estrai(): number{
    return Math.floor((Math.random()*100)+ 1 )
}

function calcola(){
    if(giocatore1 == estratto){
        console.log('Il giocatore 1 ha indovinato');
    } else if(giocatore2==estratto){
        console.log('il giocatore 2 ha indovinato');
    } else if(Math.abs(giocatore1 - estratto) < Math.abs(giocatore2 - estratto)) {
        console.log('Nessuno dei due ha indovinato ma il giocatore 1 si e` avvicinato di piu')
    } else if(Math.abs(giocatore1 - estratto) > Math.abs(giocatore2 - estratto)) {
        console.log('Nessuno dei due ha indovinato ma il giocatore 2 si e` avvicinato di piu')
    }

}



