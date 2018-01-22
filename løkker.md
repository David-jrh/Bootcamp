
# **Løkker**


**while løkke**

går bettingelsen igennem indtil den er invalid i dette til fælde indtil summen når til 25 hvor 25 er inkluderet via <=
```javascript
let i = 1;

 while (i <= 25) {
     console.log(i)
     i++
 };
 ```



**do --- while løkke**
do gør at den altid kører koden igennem en gang og forstætter over til while derefter

 ```javascript
 let i = 1;
 do {
     console.log(i, "hej")
     i++
 } while (i <= 5)
 ```


**for løkke**

en løkke der er hurtigere at skrive
hvor det man i ```for ()``` har 3 egenskaber hvor variablen deffineres, betingelse og ++ eller -- .
```javascript
 for (let i = 2017; i >= 1917; i--) {
     console.log(i);
 }
 ```


 **for each** 

 en indbygget funciton som løber hver enkelt element i et array - og

```javascript
 let music = ["Metallica", "Avenged Sevendfold", "Disturbed", "Korn"]
 music.forEach(function (music, index, arr) {     console.log(music + ' har placering ' + index); });
 ```