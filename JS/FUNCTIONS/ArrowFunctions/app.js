// const add = function (x,y){
//     return x + y;
// }

const add = (x,y) => {
    return x + y;
}

const square = num => { //parameterが一つしかない場合は括弧を省略できる
    return num * num;
}

// const rollDie = () => {  //parameterがないとき空白の括弧が必要
//     return Math.floor(Math.random() * 6 ) + 1;
// }

const rollDie = () => (
    Math.floor(Math.random() * 6 ) + 1
)  //暗黙的なreturnで省略をする場合括弧にしてセミコロンは消す


const movies = [
    {
       title: 'Amadeus',
       score: 99
    },
    {
       title: 'Stand By Me',
       score: 85
    },
    {
       title: 'Parasite',
       score: 95
    },
    {
       title: 'Alien',
       score: 90
    }
 ];

//  const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}`;
//  })

 const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
 ))