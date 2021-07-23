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
console.group("debug inline:");
console.debug(card);

//?element html vars
const cardItems = document.getElementById("card-items");

//! stampo card in html la variabile card
renderCard(card, cardItems);








/******* FUNCTION UTILS ************/

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
}



/* 
function renderCard(obj, element) {
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

    //? puts string in html element
    element.innerHTML = cardTemplate;
} */