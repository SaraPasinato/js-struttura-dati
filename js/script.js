/* 
  Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
* 1. Creiamo un mazzo di carte  
* 2. Stampiamo tutte  le carte su schermo
 3. Aggiungiamo un piccolo form in HTML
 4. Ragioniamo pian pianino sulla logica dei filtri

 ?PERTANTO IL MINIMO RICHIESTO E':
  - Filtrare prima le proprietà con valori semplici (stringhe o numeri)
  - Filtrare le proprietà il cui valore è un array di stringhe
 *BONUS:
  - Far sì che se filtro una proprietà con valore stringa, riesca a mostrare la carta anche se non scrivo il suo testo interamente (es: cerco il nome digitando "creat" e riesco a trovare nei risultati le carte che hanno nel nome "creatura")
  - Filtrare anche altre proprietà i cui valori sono più complessi, se ne avete (oggetti, array di oggetti)
 */
//! inizializzo la variabile card
const card = {
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
console.group("debug card:");
console.debug(card);
console.groupEnd();
//! inizializzo l'array deck
let initialDeck = [
    {
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
    },
    {
        id: 2,
        name: "Bear Umbra",
        cost: ['2', 'G', 'G'],
        cmc: 4,
        cardType: "enchantment",
        subType: "aura",
        expansion: {
            reprintId: 1,
            name: "Commander2018",
            rarity: "GoldenRod",
            collectionNr: 131,
            totalCard: 307,
        },
        flavorText: {
            quote: "Enchant creature",
            author: "Howard Lyon",
        },
        abilities: [
            {
                launchCost: ['G', 'T'],
                description: "Enchanted creature gets +2/+2 and has Whenever this creature attacks, untap all lands you control.",
            },
            {
                launchCost: ['G', 'G', 'R'],
                description: "Totem armor (If enchanted creature would be destroyed, instead remove all damage from it and destroy this Aura.)",
            },

        ],
        costitution: 2,
        strength: 2,
        borderColor: "#000",
        illustrator: {
            author: {
                id: 2,
                name: "Howard Lyon",
            },
            source: "img/pic3.jpg",
        },
        background: {
            color: "green",
            source: "img/pic3.jpg",
        },
    },
    {
        id: 1,
        name: "Calamity Bearer",
        cost: ['2', 'R', 'R'],
        cmc: 4,
        cardType: "creature",
        subType: "giant Berserker",
        expansion: {
            reprintId: 10,
            name: "Kaldheim",
            rarity: "GoldenRod",
            collectionNr: 125,
            totalCard: 285,
        },
        flavorText: {
            quote: "He'd ignite the World Tree itself if he could.",
            author: "Simon Dominique",
        },
        abilities: [
            {
                launchCost: ['P', 'T'],
                description: " If a Giant source you control would deal damage to a permanent or player, it deals double that damage to that permanent or player instead.",
            },
        ],
        costitution: 3,
        strength: 4,
        borderColor: "#000",
        illustrator: {
            author: {
                id: 3,
                name: "Simon Dominique",
            },
            source: "img/pic2.jpg",
        },
        background: {
            color: "red",
            source: "img/pic2.jpg",
        },
    },
];
//? debug
console.group("debug deck:");
console.debug(initialDeck);





//?element html vars
const cardItems = document.getElementById("card-items");

//? function that renders card into html  
/** function arrow to render Card  and inject in html element 
 * 
 * @param {Object} obj  card
 * @returns {string} cardTamplate 
 */
const renderCard = (card) => {
    //? custruction string subType
    const subType = card.subType ? `- ${card.subType}` : ``;
    //? custruction string cite
    const cite = card.flavorText.quote ? ` </br> - ${card.flavorText.author}` : ``;
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
    <ul class="card-info">
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
    
    //? return strin
    return cardTemplate;
}

//? function that write deck into html  
/**
 * 
 * @param {ObjectArray} deck  of cards
 * @param {htmlElement} targetElement 
 */
let renderDeck = (deck, targetElement) => {
    let deckTamplate = ` `;
    for (let i = 0; i < deck.length; i++) {
        deckTamplate += renderCard(deck[i]);
    }
    console.log(deckTamplate);
    targetElement.innerHTML += deckTamplate;
}
//! exec renderdeck 
renderDeck(initialDeck, cardItems);
/**
 * Ex function renderCard
 */
/*function renderCard(obj) {
    //? custruction string subType
    const subType = obj.subType ? `- ${obj.subType}` : ``;
    //? custruction string cite
    const cite = obj.flavorText.author ? `</br> - ${obj.flavorText.author}` : ``;
    //? custruction descriptrions string
    let abilitiesContent = `<em> Nessuna Abilità </em>`;
    if (obj.abilities.length) {
        abilitiesContent = `<ul>`;
        for (let i = 0; i < obj.abilities.length; i++) {
            const currentItem = obj.abilities[i];
            abilitiesContent += `</br>`
            abilitiesContent += `<li> ${i + 1}. <strong>Descrizione:</strong></br> ${currentItem.description}</li>`
            abilitiesContent += `<li>Costo di Lancio:</br>  ${currentItem.launchCost.join(", ")}</li>`
        }
        abilitiesContent += `</ul>`;
    }
    // ! string tamplate text html
    let cardTemplate = `
   <ul class="card-info">
        <li><strong>Id:</strong> ${obj.id}</li>
        <li><strong>Nome:</strong> ${obj.name}</li>
        <li><strong>Costo</strong> d'attivazione: ${obj.cost}</li>
        <li><strong>CmC:</strong> ${obj.cmc}</li>
        <li><strong>Tipo carta:</strong> ${obj.cardType} ${subType}</li>
        <li><strong> Espansione:</strong>
            <ul>
            <li>Ristampa: ${obj.expansion.reprintId}</li>
            <li>Nome: ${obj.expansion.name}</li>
            <li>Rarità: ${obj.expansion.rarity}</li>
            <li>Numero di Collezione: ${obj.expansion.collectionNr}/${obj.expansion.totalCard}</li>
            </ul>
        </li>
        <li><strong>Testo di colore:</strong>
        <ul>
            <li>${obj.flavorText.quote} ${cite}</li>
        </ul>
        </li>
        <li> <strong> Abilità:</strong> ${abilitiesContent}</li>
        <li> <strong>Costituzione:</strong> ${obj.costitution}</li>
        <li> <strong>Forza:</strong> ${obj.strength}</li>
        <li> <strong>Colore Bordo:</strong> ${obj.borderColor}</li>
        <li><strong> Illustratore:</strong>
        <ul>
            <li><em>Nome:</em> ${obj.illustrator.author.name}</li>
            <li><em>Link immagine:</em> ${obj.illustrator.source}</li>
        </ul>
    </li>
        <li><strong> Background:</strong>
        <ul>
            <li><em>Colore Sfondo:</em> ${obj.background.color}</li>
            <li><em>Link Sfondo:</em> ${obj.background.source}</li>
        </ul>
    </li>
   </ul>`;

    //? return strin
   return cardTemplate;
}  */


//!STUB: function  renderCard general
/*
function renderCard(obj, element){
    // get property obj
      let properties= Object.keys(obj);
      let cardTemplate=`<ul class="card-info">`
      console.log(properties);
      //if exists property
      if(properties.length){
          //iteration on propreties elements
        for(let i=0; i<properties.length; i++){
            //get property 1level
            let currentProp= properties[i];

            console.log(currentProp, typeof obj[currentProp]);

          if (typeof obj[currentProp] === 'object' ){
            cardTemplate+= `<li> ${currentProp}:</li>`;
                //get property 2level
              let tmpObj=obj[currentProp];
               let subPropeties=Object.keys(tmpObj);
               console.log("sub:"+subPropeties + "legth: "+subPropeties.length);
               cardTemplate+=`<ul>`;
                for(let j=0; j<subPropeties.length; j++){
                    console.log(subPropeties[j] + ": " + obj[currentProp.subPropeties]);
                    cardTemplate+=`<li><em> ${subPropeties[j]}</em>: ${tmpObj[subPropeties[j]]}</li>`;
                }
                cardTemplate+=`</ul>`;
             }else{
                cardTemplate+= `<li> ${currentProp}: ${obj[currentProp]}</li>`;
             }


        }
      }

      cardTemplate+=`</ul>`;

      console.log(cardTemplate);
      element.innerHTML=cardTemplate;
    } */

