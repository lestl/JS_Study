function rollDie(numSides = 6) {
    // numSides = typeOf numSides !== 'undefined' ? numSides : 6;
    return Math.floor(Math.random() * numsides) + 1;
}
           //初期値をHIにした
function greet(person, msg = 'HI', suffix='!!') {
    console.log(`${msg}, ${person}さん ${suffix}`);
}