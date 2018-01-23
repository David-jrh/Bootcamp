

// let navn = "";
// let alder = "";
// let adresse = "";


// let fejlbeskeder = [];

// if (navn == "") {
//     fejlbeskeder.push("Du skal udfylde navn feltet\n");
// }

// if (alder == "") {
//     fejlbeskeder.push("Du skal udfylde alder feltet\n");
// }

// if (adresse == "") {
//     fejlbeskeder.push("Du skal udfylde adresse feltet\n");
// }

// console.log(fejlbeskeder);


// let x = 0;

// let y = 1;

// while (x <= 1600) {
//     console.log(x + 'x');
//     console.log(y + 'y');

//     x += y;
//     y += x;

// };



function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
console.log(palindrome("Tre negre med fane. En af dem er genert"));
