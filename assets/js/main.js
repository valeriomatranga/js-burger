//lista ingredienti
var ingredienti = [
    ["cheese","1"],
    ["egg","0.5"],
    ["mustard","1"],
    ["tomato","1.5"],
    ["lettuce","1"],
    ["ketchup","1"]
]

//funzione genera ingredienti e il loro prezzo
function generateElement(list,el){

    var i = 0;
    while ( i < list.length){

        el.insertAdjacentHTML("beforeend",
        `
            <div class="form_ element">
                <img width="30" src="./assets/img/${list[i][0] + '.svg'}">
                <label for="${list[i][0]}">${list[i][0]}</label>
                <input type="checkbox" name="${list[i][0]}" id="${list[i][0]}" data-price="${list[i][1]}">
            </div>

        `);

        i++;
    }
}

//richiamo della funzione
var element = document.querySelector(".ingredient");
generateElement(ingredienti,element);


// Ascoltiamo per il click sul pulsante calculate
document.querySelector('button').addEventListener('click', function () { 

    //  prezzo base panino
    var prezzo_iniziale = 5;

    // Variazione prezzo panino quando un ingrediente viene aggiunto
    var aggiunta = document.querySelectorAll("input[type='checkbox']");

    var sommaIngredienti = null;

    for(var i = 0; i < aggiunta.length; i++) {
        var element = aggiunta[i];
        if(element.checked) {
            sommaIngredienti += Number(element.getAttribute('data-price'))
        }
    }
    console.log(sommaIngredienti);

    var prezzoTotale = prezzo_iniziale  + sommaIngredienti;
    console.log(prezzoTotale);

    //Codici sconto e calcolo prezzo finale scontatato
    var codiceSconto = [
        ["poldo",".5"],
        ['olivia',"4"],
        ["popeye","2"]
    ];

    var codiceInserito = document.querySelector('#coupon');

    for(i = 0; i < codiceSconto.length; i++){

        if(codiceSconto[i][0] === codiceInserito){
            prezzoTotale - 
        }
    }

});