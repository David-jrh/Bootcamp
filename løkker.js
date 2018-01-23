

// Løkker



// 

// let i = 1;

// while (i <= 25) {
//     console.log(i);
//     i++
// };

// 3
// let i = 1;
// do {
//     console.log(i, "hej");
//     i++
// } while (i <= 5);



// opgave 4

// for (let i = 2017; i >= 1917; i--) {
//     console.log(i);
// };

// opgave 5
// let ugedage = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"];


// opgave 8

// let ugedage = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"];

// for (let i = 0; i < ugedage.length; i++) {
//     console.log(ugedage[i]);
// };


// let music = ["Metallica", "Avenged Sevendfold", "Disturbed", "Korn"]

// music.forEach(function (music, index, arr) {
//     console.log(music + ' har placering ' + index);
// });

let random = [1, 3, 24, 54, 231, 543, 12, 42, 5, 8, 9, 5];

random.forEach(function (tal, index) {
    if (index < random.length - 1) {

        if (tal > random[index + 1]) {

            console.log(tal + ' er støre end ' + random[index + 1]);
        }
        else {

            console.log(tal + ' er mindre end ' + random[index + 1]);
        }
    } else {
        console.log(tal + ' sidste tal');
    }
});