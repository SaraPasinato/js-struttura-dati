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
    id: 1,
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
        totalCard: 143,
    },
    flavorText: {
        quote: "took all its strength to contain the fire within.",
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
    costitution: 6,
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

//?element html vars
const cardItems = document.getElementById("card-items");

//! stampo card in html la variabile card
renderCard(card, cardItems);








/******* FUNCTION UTILS ************/

function renderCard(obj, element) {
    //? custruction string subType
    const subType = card.subType ? `- ${card.subType}` : ``;
    //? custruction string cite
    const cite = card.flavorText.author ? `</br> - ${card.flavorText.author}` : ``;
    //? custruction descriptrions string 
    let abilitiesContent = `<em> Nessuna Abilità </em>`;
    if (card.abilities.length) {
        abilitiesContent = `<ul>`;
        for (let i = 0; i < card.abilities.length; i++) {
            const currentItem = card.abilities[i];
            abilitiesContent += `</br>`
            abilitiesContent += `<li> ${i + 1}. <strong>Descrizione:</strong></br> ${currentItem.description}</li>`
            abilitiesContent += `<li>Costo di Lancio:</br>  ${currentItem.launchCost.join(", ")}</li>`
        }
        abilitiesContent += `</ul>`;
    }
    // ! string tamplate text html
    let cardTemplate = `
   <ul class=\"card-info\">
        <li><strong>Id:</strong> ${card.id}</li> 
        <li><strong>Nome:</strong> ${card.name}</li>   
        <li><strong>Costo</strong> d'attivazione: ${card.cost}</li> 
        <li><strong>CmC:</strong> ${card.cmc}</li>     
        <li><strong>Tipo carta:</strong> ${card.cardType} ${subType}</li>     
        <li><strong> Espansione:</strong>
            <ul>
            <li>Ristampa: ${card.expansion.reprintId}</li>
            <li>Nome: ${card.expansion.name}</li>
            <li>Rarità: ${card.expansion.rarity}</li>
            <li>Numero di Collezione: ${card.expansion.collectionNr}/${card.expansion.totalCard}</li>
            </ul>
        </li>
        <li><strong>Testo di colore:</strong>
        <ul>
            <li>${card.flavorText.quote} ${cite}</li>
        </ul>
        </li>
        <li> <strong> Abilità:</strong> ${abilitiesContent}</li>
        <li> <strong>Costituzione:</strong> ${card.costitution}</li>
        <li> <strong>Forza:</strong> ${card.strength}</li>
        <li> <strong>Colore Bordo:</strong> ${card.borderColor}</li>
        <li><strong> Illustratore:</strong>
        <ul>
            <li><em>Nome:</em> ${card.illustrator.author.name}</li>
            <li><em>Link immagine:</em> ${card.illustrator.source}</li> 
        </ul>
    </li>
        <li><strong> Background:</strong>
        <ul>
            <li><em>Colore Sfondo:</em> ${card.background.color}</li>
            <li><em>Link Sfondo:</em> ${card.background.source}</li> 
        </ul>
    </li>
   </ul>`;

    //? puts string in html element
    element.innerHTML = cardTemplate;
}