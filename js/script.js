/* 
   !Proviamo a ripetere quanto visto in classe, creando la 
   struttura che riteniamo più adeguata per rappresentare una carta di Magic.
    Una volta definita la struttura,
    stampiamo sulla pagina HTML tutte le informazioni relative
    alla carta stessa, senza particolare attenzione a dettagli 
    grafici (va bene una lista coi tag UL e LI)

   ? BONUS: provare a creare una funzione che stampi la carta in pagina.
 */
//! inizializzo la variabile card
var card = {
    name: "Bloodfire Colossus",
    cost: ['6', 'R', 'R'],
    cmc: 8,
    cardType: "creature",
    subType: "giant",
    expansion: {
        reprintId: 9,
        name: "Apocalypse",
        rarity: "GoldenRod",
        collectionNr: 55,
    },
    flavorText: {
        quote: "t took all its strength to contain the fire within.",
        author: "Greg Staples",
    },
    abilities: [
        {
            launchCost: ['R', 'T'],
            description: "Sacrifice Bloodfire Colossus: It deals 6 damage to each creature and each player.",
        },
        {
            launchCost: ['R', 'R', 'R'],
            description: "Whenever you cast a noncreature spell, surveil 1.You may put that card into your graveyard.",
        },

    ],
    collectionNr: "55/148",
    costistution: 6,
    strength: 6,
    borderColor: "#000",
    illustrator: {
        author: {
            id: 1,
            name: "Greg Staples",
        },
        source: "img/pic.jpg",
    },

    background: {
        color: "red",
        source: "img/pic.jpg",
    },
};

//? debug
console.group("debug inline:");
console.debug(card);