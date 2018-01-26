
// ---------1-----------
// function lavKage(kager) {
//     console.log("en " + kager + " kage");
// };


// let kager = ["drømme", "gulerøds", "fløde", "lagkage"]


// kager.forEach(lavKage);



//----- 2------------
// function tal(data, callback) {
//     callback(data);
// }


// function behandle(data) {
//     console.log("<p>" + data + "</p>");
// };

// tal("tais", behandle)



//-----------3----------------

// her deffineres en funktion getData som kan have 2 parrametre medsendt.
function getData(dataURI, outputData) {
    // der logges i consolen 
    console.log('første linje i getData funktionen...');
    // her sættes variablen timer til at svare til den prædeffinered function setTimeout som har et callback, og en anonym function deffineres så setTimeout kan "gøre noget".
    let timer = setTimeout(function () {
        // den anonyme function consolo logger en tekst string.
        console.log('Her der der gået 2 sekunder.');
        // opretter et array med datatype numbers.
        let dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
        // her callbackes via den andet parramter  outputData og tag array'et med
        outputData(dataArray);
        // setTimeout's delay får en værdi i ms (2sek) og skal deffineres ved bruge af det Java præ dif, i dette tilfælde gør det at kode i krøllen forsinkes.
    }, 2000);
}
// outputData deffineres som function og har et parrameter som er vores array
function outputData(dataArray) {
    // functionen logger i consolen en string og klistre den sammen med vores array
    console.log('Dette er funktionen der udskriver det hentede data: ' + dataArray);
}
// getData kaldes og værdi til første parametre er en string (addresse), og functionen outputData sendes med til brug af callback
getData('http://www.domain.com/something', outputData);
// logger en string
console.log("Denne kode linje burde være den sidste.");