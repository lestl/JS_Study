const scores = [164266, 342762, 967782, 527876, 232823, 68723, 59235, 569774];

const highScore = scores[0];
const secondScore = scores[1];

const [gold, silver, bronze, ...rest] = scores;
//分割代入で gold = 164266, silver = 342762 このように順番に代入できる
//それにrest構文でその他の要素もrestで出力でできる

const user = {
    email: 'harvey@example.com',
    password: 'gw5nuwvnwoq',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first open',
    city: 'San Francisco',
    state: 'California'
}

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName, lastName, email } = user;

const { born: birthYear, died: deathYear } = user;
//born　を　birthYear って言う変数に変えたこのように変換できる :

//const {firstName, lastName, died = 'N/A'} = user2;
//diedって言う変数はないのでdefaultを設定することができる = ''

// const { born: birthYear, died: deathYear = 'N/A' } = user;
//このように変えた変数にdefaultを設定することもできる

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

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

movies.filter(movie => movie.score >= 90);
movies.filter(({ score }) => score >= 90);

movies.map(movie => {
    return `${movie.title}(${movie.year}): ${movie.score}/100`
})

movies.map(({title, year, score}) => {
    return `${title}(${year}): ${score}/100`
})
