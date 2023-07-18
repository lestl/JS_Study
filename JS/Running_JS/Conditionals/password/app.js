const password = prompt('password input');

if (password.length >= 6){
    console.log('password length good');

    if (password.indexOf(' ') === -1){
        console.log('space good');
    }
    else {
        console.log('don\'t input the space');
    }

} else {
    console.log('6word password');
}