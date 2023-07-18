const nums = [13,4,5,21,16,85,35,25,19,694];
Math.max(...nums);
Math.max(nums); //NaN

const cats = ['Tama', "Tora", "Momo"];
const dogs = ['Hachi', 'Pochi'];

const allPets = [...cats, ...dogs];
//const allPets = [...cats, ...dogs, 'Sakura', 'Kuchi'];こんな風に直ちに追加したりできる
//== cats.concat(dogs);

const feline = {legs:4, family: 'ネコ科'};
const canine = {family: 'イヌ科', bark:true};