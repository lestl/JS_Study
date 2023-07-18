const subreddits = [
    'cooking',
    'books',
    'chickens',
    'life',
    'pics',
    'soccer',
    'movies',
];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let subreddit of subreddits) {
    console.log(subreddit)
}

for (let subreddit of subreddits) {
    console.log(`visit reddit.com/r/${subreddit}`)
}