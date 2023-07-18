// function sum() {
//     return arguments.reduce((total, num) => total + num)
// }
// == sum(1,2,3) argumentsのせいで
// 0: 1   1: 2   2: 3  になる配列みたいに

function sum(...nums) {
    console.log(nums);
    return nums.reduce((total, num) => total + num)
}

function raceResults(gold, silver, ...rest){
    console.log(`金:${gold}`);
    console.log(`銀:${silver}`);
    console.log(`その他:${rest}`);
}

//...restを使ってgold,silverじゃないその他を全部restに入れることができる
// raceResults('HI', "BYE", "GOOD", "NICE")
// == gold = 'HI'    silver = "BYE"   rest = 'GOOD', 'NICE'