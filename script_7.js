window.alert(`Prêt à parler au type le plus intéressant du monde ?`);
window.alert(`Tape 'exit' quand t'en as marre`);

n = 0
while (n !== 10){
    n += 1
let input = prompt('Wsh yakoi ?');

var question = "?";
var fortnite = "fortnite";
function isUpperCase(input) {
    return input === input.toUpperCase() && input !== "";
}

//while(input !== "stop") {
if (input.includes(question)){
console.log (`Oué oué c'est ça...`)
} 
else if (input.includes(fortnite)){ 
console.log (`On s' fait une partie oklm ? Direk jt'éclate`)
}
else if (isUpperCase(input)){
console.log (`Détend toi cousin mdr`)
}
else if (input === ""){
    console.log (`Wsh gros t'es en PLS ou bien ?`)
}
else if (input === `exit`){
    break
}
else {
    console.log (`Balek`)
}
}
//}
//console.log(`Oué c'est ça casse toi`)