let maximum = parseInt(prompt('数字を入力してください'));
while (!maximum){
    let maximum = parseInt(prompt('エラーが起きました、再入力してください'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
//Math.floorで小数を消すそのあとMath.random() * 10 + 1で　0~10じゃなく　1~10までのランダムな数字をだす
let count = 1;

console.log(targetNum);

let guess = prompt('一つ数字を決めました。数字を当ててみてください');
while (parseInt(guess) !== targetNum){ //条件を検討するだけguessをintにする//
    if(guess === 'q') break;
    count++;
    if(guess > targetNum){
        guess = prompt('その数字より小さい');
    } else {
        guess = prompt('その数字より大きい');
    }
    
    
}
if (guess === 'q'){
    console.log('終了します');
}
else{
console.log("正解",'', count,'만에 성공했습니다.');
}