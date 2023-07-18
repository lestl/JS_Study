const testScores = {
    ken: 80,
    yuki: 67,
    taro: 89,
    ryota: 91,
    yuma: 72,
    yuko: 77,
    chiaki: 83,
    kota: 97,
    saeko: 81,
    koki: 60,
};

//Object.keysでtestScoresのキーを配列として読み込む//
for (let student of Object.keys(testScores)){
    console.log(`${student}さんは${testScores[student]}`);
    //testScoresにstudentの変数をいれてtestScoresのキーを与えてもらえたstudentの学生の名前をtestScoresに与えてその学生の値を読む
}

// //for (let student in testScores){
//     console.log(`${student}さんは${testScores[student]}`);
// }; 