let n = prompt(`Choisis un chiffre : Ce sera la hauteur de ta pyramide`);
function mario(n) {
    var output="";
    for (var i = 1; i <= n; i++) {
        for (var k = 1; k <= (n - i); k++) {
            output += "   ";
        }
        for (var j = 1; j <= i; j++) {
            output+="#" + "  ";
        }
        console.log(output);
        output="";
    }
}  
console.log(mario(n));
