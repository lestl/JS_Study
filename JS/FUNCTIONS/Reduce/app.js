const prices = [980, 1500, 1980, 4980, 2980];

let total = 0;
for (let price of prices){
    total += price;
}
console.log(total); // 12420

prices.reduce((total, price) =>{
    return total + price;
})

const minPrice = prices.reduce((min, price) => {
    if (min > price) {
        return price;
    }
    return min;
})

const maxPrice = prices.reduce((max, price) => {
    if (max < price) {
        return price;
    }
    return max;
})

const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: "Alien",
        score: 90,
        Year: 1979
    }
];

const highesMovie = movies.reduce((bestMovies, currMovie) =>{
    if (bestMovies.score < currMovie.score) {
        return currMovie;
    }
    return bestMovies;
});