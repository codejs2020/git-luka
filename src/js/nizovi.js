/* eslint-disable no-unused-vars */
// 1. zadatak
const slova = ['s', 'a', 'e']
// 2. zadatak
const brojevi = [1, 2, 3]

// 3. zadatak
const imena2 = ['Vladimir', 'Branko', 'Stefan', 'Jelena', 'Pavle', 'Milan', 'Jovana']
const prezimena2 = ['Matic', 'Jovic', 'Rajic', 'Milutinovic', 'Buha', 'Raden', 'Kojic']
const marke2 = ['Audi', 'BMW', 'Mercedes', 'Lambo', 'Ferrari', 'Ford', 'Chevy']
const zanimanja2 = ['Doktor', 'Advokat', 'Profesor', 'Sportista', 'Programer', 'Konobar', 'Automehanicar']
const visina2 = [1.78, 1.65, 1.87, 1.67, 1.97, 1.79, 1.83]
const tezina2 = [78, 84, 91, 68, 81, 89, 90]

// 4. zadatak
const niz = []
const max = 10000000
const min = 1000000

for (let i = 0; i < 50; i++) {
  niz[i] = Math.floor(Math.random() * (max - min + 1)) + min
}
// eslint-disable-next-line no-console
console.log(niz)

// 5. zadatak
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const niz5 = []

for (let i = 0; i < 200; i++) {
  niz5[i] = alphabet[Math.floor(Math.random() * 25)]
}
// console.log(niz5)

// 6. zadatak
const niz2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['q', 't', 'u']]

// 7. zadatak
let a = ''
for (a in niz2) {
  // console.log(niz2[a])
}

// 8.zadatak
// Isti princip i za ostale nizove.
for (let i = 0; i < niz2.length; i++) {
  // console.log(niz2[i])
}

// 9. zadatak
for (let i = 0; i < alphabet.length; i++) {
  // console.log(alphabet[i])
}

let el = ''
for (el in alphabet) {
  // console.log(alphabet[el])
}
// 10. zadatak
const srpSlova = 'абвгдђжзијклљмнњопрстћуфхцчџш'.split('')

// 11. zadatak

// OBJEKTI

// 1. zadatak
const osobe = {
  osoba1: {
    ime: 'Marko',
    prezime: 'Milutinov',
    zanimanje: 'sportista',
    visina: 1.98,
    tezina: 90 + ' kg',
    automobil: ''
  },
  osoba2: {
    ime: 'Janko',
    prezime: 'Jankovic',
    zanimanje: 'konobar',
    visina: 1.75,
    tezina: 78 + ' kg',
    automobil: ''
  },
  osoba3: {
    ime: 'Ivana',
    prezime: 'Buha',
    zanimanje: 'balerina',
    visina: 1.61,
    tezina: 58 + ' kg',
    automobil: ''
  },
  osoba4: {
    ime: 'Marija',
    prezime: 'Radovic',
    zanimanje: 'advokat',
    visina: 1.61,
    tezina: 58 + ' kg',
    automobil1: '',
    automobil2: ''
  },
  osoba5: {
    ime: 'Matija',
    prezime: 'Matic',
    zanimanje: 'vatrogasac',
    visina: 1.99,
    tezina: 98 + ' kg'

  }
}

// 2.zadatak
const automobili = {
  automobil1: {
    marka: 'BMW',
    boja: 'Crna',
    brojVrata: 5
  },
  automobil2: {
    marka: 'Aston Martin',
    boja: 'Plava',
    brojVrata: 3
  },
  automobil3: {
    marka: 'Audi',
    boja: 'Zuta',
    brojVrata: 5
  },
  automobil4: {
    marka: 'Mercedes',
    boja: 'Crvena',
    brojVrata: 3
  },
  automobil5: {
    marka: 'Masserati',
    boja: 'Zlatna',
    brojVrata: 3
  }
}
// 3. zadatak
osobe.osoba1.automobil = automobili.automobil5
osobe.osoba2.automobil = automobili.automobil1
osobe.osoba3.automobil = automobili.automobil2
osobe.osoba4.automobil1 = automobili.automobil3
osobe.osoba4.automobil2 = automobili.automobil4

// 4. zadatak
// Ne znam sta se trazi u ovom zadatku iskreno.

/* eslint-disable no-unused-vars */
