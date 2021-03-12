/* Crea un array di 10 oggetti che rappresentano una
zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */
/*$(document).ready(function() {
var zucchine = [
    {
        "peso" : 15,
        "lunghezza" : 20
    },
    {
        "peso" : 14,
        "lunghezza" : 20
    },
    {
        "peso" : 16,
        "lunghezza" : 20
    },
    {
        "peso" : 10,
        "lunghezza" : 20
    },
    {
        "peso" : 7,
        "lunghezza" : 20
    },
    {
        "peso" : 10,
        "lunghezza" : 20
    },
    {
        "peso" : 11,
        "lunghezza" : 20
    },
    {
        "peso" : 9,
        "lunghezza" : 20
    },
    {
        "peso" : 8,
        "lunghezza" : 20
    },
    {
        "peso" : 10,
        "lunghezza" : 20
    },
]

var sommaTot = 0;

for (i = 0; i < zucchine.length; i++) {
    sommaTot +=(zucchine[i]["peso"]);
}

console.log(sommaTot);
});*/

/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */
/*
$(document).ready(function() {
    var bigZuk = [];
    var minZuk = [];

    var zucchine = [
        {
            "peso" : 15,
            "lunghezza" : 10
        },
        {
            "peso" : 14,
            "lunghezza" : 7
        },
        {
            "peso" : 16,
            "lunghezza" : 17
        },
        {
            "peso" : 10,
            "lunghezza" : 21
        },
        {
            "peso" : 7,
            "lunghezza" : 20
        },
        {
            "peso" : 10,
            "lunghezza" : 12
        },
        {
            "peso" : 11,
            "lunghezza" : 2
        },
        {
            "peso" : 9,
            "lunghezza" : 27
        },
        {
            "peso" : 8,
            "lunghezza" : 14
        },
        {
            "peso" : 10,
            "lunghezza" : 15
        }
    ]

    for (i = 0; i < zucchine.length; i++) {
        if (zucchine[i]["lunghezza"] > 15) {
            bigZuk.push(zucchine[i]);
            
        }
        else {
            minZuk.push(zucchine[i]);
        }
    }
    console.log(bigZuk);
    console.log(minZuk);

    var sommaTot = 0;
    var sommaTotDue = 0;

    for (i = 0; i < bigZuk.length; i++) {
        sommaTot +=(bigZuk[i]["peso"]);
    }
    console.log(sommaTot);
    for (i = 0; i < minZuk.length; i++) {
        sommaTotDue +=(minZuk[i]["peso"]);
    }
    console.log(sommaTotDue);
}); */

/* Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC) */

//prima modalità
/*function myFunction() {
    var x = document.getElementById("myText").value;
    var tmp = "";
    for (i = x.length - 1; i >= 0; i--) {
        tmp += x[i];
    }
    document.getElementById("demo").innerHTML = tmp;
}

//seconda modalità
/*var y = document.getElementById("myText").value;
var x = y.split("");
console.log(x.reverse().join(""));

$('input').keyup(function(event){
    console.log(event.which);
    });*/



/*var canzoni = {
    canzone1 : {
        "titolo" : "Sei un mito",
        "Cantante" : "883",
        "anno" : "2000"
    },
    canzone2 : {
        "titolo" : "Il cielo è sempre più blu",
        "Cantante" : "Rino Gaetano",
        "anno" : "1970"
    },
    canzone3 : {
        "titolo" : "Hanno ucciso l'uomo ragno",
        "Cantante" : "883",
        "anno" : "1990"
    } 
} 
console.log(canzoni);

canzoni.canzone4 = {}
canzoni.canzone4.titolo = prompt("Inserisci un titolo");
canzoni.canzone4.Cantante = prompt("Inserisci l'autore della canzone");
canzoni.canzone4.anno = parseInt(prompt("Inserisci l'anno della canzone"));

console.log(canzoni);*/

/*var automobili = [{
        "marca" : "fiat",
        "modello" : "punto",
        "colore" : "rosso",
        "anno" : 2000,
    },
    {
        "marca" : "lamborghini",
        "modello" : "elettra",
        "colore" : "rosa",
        "cavalli" : 1,
        "anno" : 2000,
    },
    {
        "marca" : "lancia",
        "modello" : "delta",
        "colore" : "bianco",
        "anno" : 1970,
    },
    {
        "marca" : "bmw",
        "modello" : "punto",
        "colore" : "bianco",
        "anno" : 2000,
    },
    {
        "marca" : "maserati",
        "modello" : "ghibli",
        "colore" : "bianco",
        "cavalli" : 180,
        "anno" : 2000,
    },
    {
        "marca" : "ferrari",
        "modello" : "california",
        "colore" : "rosso",
        "cavalli" : 300,
        "anno" : 2000,
    },
    {
        "marca" : "porsche",
        "modello" : "punto",
        "colore" : "giallo",
        "cavalli" : 200,
        "anno" : 2000,
    },
];

for (i=0; i < automobili.length; i++) {
    console.log(automobili[i]);   
}

for (i=0; i < automobili.length; i++) {
    delete automobili[i].cavalli;
}
console.log(automobili);

for (i=0; i < automobili.length; i++) {
    if (automobili[i].colore == "bianco") {
        automobili[i].anno= 2020;
    }
}
console.log(automobili);*/


/*Dati due array (nomi[], cognomi[]) dovrete generare un terzo array
(listaInvitati[]) composto da tre stringhe composte da 
nome + ' ' + cognome.
La coppia nome e cognome sarà casuale, 
quindi l'elemento i verrà generato dalla funzione che genera 
numeri random*/

/*var nomi = ["marco", "paolo", "aldo", "giovanni", "giacomo"];
var cognomi = ["bianchi", "rossi", "verdi", "gialli", "neri"];
var listaInvitati = [];

while (fintanto che questa condizione è vera cicla) {
    listaInvitati
}*/

/*Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari*/
/*var numeri = [0,1,2,3,4,5,6,7,8,9,10];
var sommaPari = 0;

for (var i=0; i < numeri.length; i++) {
    if (numeri.indexOf(numeri[i]) % 2 != 0) {
        sommaPari  += numeri[i];
    } 
}
console.log(sommaPari);*/

/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var box1 = ["pippo", "pluto", "paperino","qui", "quo", "qua"];
var box2 = ["walt", "disney"];


for (var i= 0; i < box1.length; i++) {
    if (box2.length < box1.length) {
        var parolaAggiunta = prompt("Inserisci il nome di un personaggio dei cartoni animati");
        box2.push(parolaAggiunta);
    }
    else {
        alert("Entrambi gli array contengono il medesimo numero di elementi");
    }   
}
console.log(box1.length);
console.log(box2.length);