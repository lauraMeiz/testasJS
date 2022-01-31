/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų) */
console.log(
  "---------------1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)---------------------------"
);
const a = 5;
const b = 8;

if (a >= b) {
  console.log(` Didesnis yra ${a}`);
} else if (a <= b) {
  console.log(`Didesnis yra ${b}`);
} else {
  console.log(` ${a} yra lygu ${b}`);
}
console.log(
  "------------------2. Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)-------------------------------------"
);

let c = 0;

for (let i = 1; i <= 10; i++) {
  c++;
  console.log(c);
}

console.log(
  "--------------------------------------3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)-----------------------------------"
);

let d = 0;

for (let i = 0; i <= 5; i++) {
  d = i + i;
  console.log(d);
}

console.log(
  "-------------------- Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)------------------------------------"
);

let e = 0;

for (let i = 1; i <= 10; i++) {
  e = Math.random() * 10;

  console.log(`${Math.ceil(e)}`);
}

console.log(
  "-----------------5. Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)-------------------------------"
);

let g = 0;

let max = 5;

for (let i = 1; i < max; i++) {
  g = Math.random() * 10;
  g++;
  console.log(`${Math.ceil(g)}`);
}

console.log(
  "-------6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)-----------------"
);

const masyvas = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30,
];
let biggest = masyvas[0];
let secondBiggest = masyvas[0];
for (let i = 1; i < masyvas.length; i++) {
  const narys = masyvas[i];
  if (narys > biggest) {
    biggest = narys;
  }
  if (secondBiggest < biggest) {
    secondBiggest = narys - 1;
  }
}
console.log(secondBiggest);

/*
let masyvas = [];

for (let i = 10; i <= 30; i++) {
  masyvas += i;

  //masyvas.push([Math.floor(Math.random() * 30)]);
}
console.log(masyvas);
*/

console.log(
  "--------------7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)--------------------------------"
);

const raides = [];
const alphabet = ["A", "B", "C", "D"];
for (let i = 0; i < 100; i++) {
  raides.push(alphabet[Math.floor(Math.random() * 3)]);
}
let summa = {};
//console.log(raides);
raides.forEach(function (raides) {
  summa[raides] = (summa[raides] || 0) + 1;
});

console.log(summa);

//console.log(raides);

console.log(
  "-------8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).---------"
);

function lygineSuma(vien, du) {
  if (!Array.isArray(vien) && Array.isArray(du)) {
    return `Abu kintamieji turi buti arba masyvai arba skaiciai`;
  }
  let suma = vien + du;
  if (suma % 2 === 0) {
    return suma;
  } else {
    return ` Nelygine suma: ${suma}`;
  }
}

console.log(lygineSuma(3, 7));
console.log(lygineSuma(2, 5));
console.log(lygineSuma(23, [2, 4, 6]));
console.log(lygineSuma([2, 3], 5));

console.log(
  "-----9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminskaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)-"
);

function pirminisSkaicius(skaicius) {
  if (typeof skaicius !== "number" && !isFinite(skaicius)) {
    return `Tai ne skaicius`;
  }
  for (i = 1; i < skaicius; i++) {
    if (skaicius % 2 === 1) {
      return `Skaicius pirminis`;
    } else {
      return `Skaicius nepirminis`;
    }
  }
}

console.log(pirminisSkaicius("labas"));
console.log(pirminisSkaicius(9));
console.log(pirminisSkaicius(7));
console.log(pirminisSkaicius(2));
console.log(
  '-----------10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų) */------------'
);

function telefonoNumeris(digit) {
  if (Array.isArray(digit)) {
    let number = "";

    for (let i = 0; i < digit.length; i++) {
      const x = digit[i];

      number =
        "'(" +
        x.toString().replace(x, "X").split() +
        ("" + x).toString().replace(x, "X").split() +
        ("" + x).toString().replace(x, "X") +
        ") " +
        x.toString().replace(x, "X").split() +
        ("" + x).toString().replace(x, "X") +
        ("" + x).toString().replace(x, "X") +
        "-" +
        ("" + x).toString().replace(x, "X") +
        ("" + x).toString().replace(x, "X") +
        ("" + x).toString().replace(x, "X") +
        ("" + x).toString().replace(x, "X") +
        "'. ";
    }
    return number;
  }
}
console.log(telefonoNumeris([8, 8, 8, 8, 8, 8, 8, 8, 8, 8]));
