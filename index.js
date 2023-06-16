const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){
cats.push('Ralph');
}
function destructivelyPrependCat(Bob){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop('Garfield');
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift('Milo');
}
function  appendCat(Broom){
    var cats2 = []
    cats.push('Broom')
     return cats
}
