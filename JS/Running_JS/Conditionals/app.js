console.log('条件分岐の前')

let random = Math.random();
if (random < 0.5) {
    console.log('0.5より小さい');
    console.log(random);
}
console.log('条件分岐の後')

if (random >= 0.5){
    console.log('0.5以上');
    console.log(random);
}