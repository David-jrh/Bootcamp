

// let navn = "";
// let alder = "";
// let adresse = "";


// let fejlbeskeder = "";

// if (navn == "") {
//     fejlbeskeder +="Du skal udfylde navn feltet\n";
// }

// if (alder == "") {
//     fejlbeskeder +="Du skal udfylde alder feltet\n";
// }

// if (adresse == "") {
//     fejlbeskeder +="Du skal udfylde adresse feltet\n";
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



// function palindrome(str) {
//     let re = /[\W_]/g;
//     let lowRegStr = str.toLowerCase().replace(re, '');
//     let reverseStr = lowRegStr.split('').reverse().join('');
//     return reverseStr === lowRegStr;
// }
// console.log(palindrome("Tre negre med fane. En af dem er genert"));



// for (let num = 1; num < 137; num++) {
//     let tal = num;
//     if (num % 3 == 0) {
//         tal = "plum";
//     }
//     if (num % 5 == 0) {
//         tal = "bus";
//     }


//     console.log(tal)
// }


// let brugernavn = "";
// let password = "";
// let email = "";

// let fejlbeskeder = [];

// if (brugernavn == "") {
//     fejlbeskeder.push("Du skal udfylde brugernavn feltet\n");
// }

// if (password == "") {
//     fejlbeskeder.push("Du skal udfylde password feltet\n");
// }

// if (email == "") {
//     fejlbeskeder.push("Du skal udfylde email feltet\n");
// }

// console.log(fejlbeskeder);



// function sammensaetTekst(forste, anden) {
//     return forste + " " + anden;
// }
// // der skal ikke være "" rundt om parametre ej heller i return

// let resultat = sammensaetTekst("Mickey", "Mouse");

// console.log(resultat); // Forventede resultat: "Mickey Mouse"




// function bmi(højde, vægt) {

//     let resultat = vægt / Math.pow(højde, 2); //(højde * højde) kan også bruges

//     if (resultat < 18.5) {
//         return "undervægtig"
//     } else if (resultat < 24.9) {
//         return "normalvægt"
//     } else if (resultat < 29.9) {
//         return "overvægt"
//     } else if (resultat < 39.9) {
//         return "fedme"
//     } else if (resultat > 40) {
//         return "svær fedme"
//     } else {
//         return "ikke muligt!"
//     }
// };
// let joergen_leth = bmi(1.98, 73);
// console.log(joergen_leth);

// // console.log(bmi(1.92, 200)) ku også bruges




// function Valuta(pris, tegn) {
//     return pris + " " + tegn
// };

// let pris = 1200;
// let tegn = "kr.";
// console.log(Valuta(pris2, tegn))

// console.log(Valuta(1200, "kr."));