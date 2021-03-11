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
            bigZuk.push(zucchine[i].lunghezza);
            
        }
        else {
            minZuk.push(zucchine[i].lunghezza);
        }
    }
    console.log(bigZuk);
    console.log(minZuk);

    var sommaTot = 0;

    for (i = 0; i < bigZuk.length; i++) {
        sommaTot +=(bigZuk[i]);
    }
    console.log(sommaTot);
});