let n;
n = prompt(`Choisis un chiffre`);

function facto(n) {
    if (n == 0){
        return 1;
    } else if (n > 0){
        return n * facto(n-1);
    } else {
        return `... Une erreur : tu as rentré un chiffre négatif, ou pas un chiffre du tout. Super...`;
    }
}

console.log(`Le résultat est ${facto(n)}`)