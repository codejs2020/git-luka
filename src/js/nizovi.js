/* eslint-disable no-unused-vars */
// 1. zadatak
const slova = ['s', 'a', 'e']
// 2. zadatak
const brojevi = [1, 2, 3]

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
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function nizovi1() {
  return alphabet[Math.floor(Math.random() * 25)]
}
for (let i = 0; i < 40; i++) {
  // console.log(nizovi1())
}

// 6. zadatak
const niz2 = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['q', 't', 'u']]

// 10. zadatak
const srpSlova = 'абвгдђжзијклљмнњопрстћуфхцчџш'.split('')

// 11. zadatak     Nisam siguran na sta se misli u ovom zadatku
function ćirilica() {
  return 'абвгдђжзијклљмнњопрстћуфхцчџш'.split('')
}
// usage: ćirilica()

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
const automobil = {
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

    brojVrata: '3'
  },
  automobil5: {
    marka: 'Masserati',
    boja: 'Zlatna',
    brojVrata: 3
  }
}
// 3. zadatak
osobe.osoba1.automobil = automobil.automobil5
osobe.osoba2.automobil = automobil.automobil1
osobe.osoba3.automobil = automobil.automobil2
osobe.osoba4.automobil1 = automobil.automobil3
osobe.osoba4.automobil2 = automobil.automobil4

// 4. zadatak
// Ne znam sta se trazi u ovom zadatku iskreno.
const objekat1 = [automobil, osobe]
/* eslint-disable no-unused-vars */
