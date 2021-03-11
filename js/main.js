$(document).ready(function() {

    /* Crea un array di 10 oggetti che rappresentano una
zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */
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
});