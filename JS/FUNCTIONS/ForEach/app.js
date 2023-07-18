const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15, 16, 17, 18, 19, 20];

//function print(element) {
//    console.log(element);
//}

//numbers.forEach(print);

numbers.forEach(function (element) {
   console.log(element);
  });

for (let elem of numbers) {
   console.log(elem);
}



const movoies = [
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

const titles = movoies.map(function(movie){
   return movie.title;
});
// Amadeus - 99 / 100
// movies.forEach(function(movie) {
//  console.log(`${movie.title} - ${movie.score}/100`);
// });


console.log('map ---------------------- map');

const doubles = numbers.map(function(num){
   return num * 2 ;
});



