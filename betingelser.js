betingelser øvelser

3
let hej = true;

if (1) {
    console.log('hej verden');
};

3

let random = Math.floor(Math.random() * 11);

if (random > 5) {
    console.log("støre end fem");
}
else {
    console.log("mindre end fem");
}


4
let yes = true;
let result = yes ? "maybe" : "no";
console.log(result);


5
let laeskDrik = "kakao";

if (laeskDrik == "kakao") {
    console.log('er det bedste');

} else if (laeskDrik == "fisk") {
    console.log('kagemad');

} else if (laeskDrik == "ost") {
    console.log('halvt');

} else if (laeskDrik == "løg") {
    console.log('godt');

} else {
    console.log('nej');
}


6
let LDrik = "kakao";
switch (LDrik) {
    case "kakao":
        console.log(LDrik, 'er det bedste');
        break;
    case "juice":
        console.log(LDrik, 'giver ondt i maven');
        break;
    case "cola":
        console.log(LDrik, 'nej neje');

    case "kage":
        console.log(LDrik, 'ost');
        break;
    default:
        console.log(LDrik, 'er ukendt');
        break;
}