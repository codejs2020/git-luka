let brPokusaja = 5
const trazeniBroj = Math.floor(Math.random() * 100)

// eslint-disable-next-line no-console
console.log(trazeniBroj)

let pokusaj = ''
const poruka = 'Pogodi broj izmedju 0 i 99.'
const donjaGranica = 0
const gornjaGranica = 99

while (brPokusaja > 0) {
  pokusaj = prompt(poruka)

  if (pokusaj < donjaGranica) {
    alert('Broj mora biti veci od 0.')
  } else if (pokusaj > gornjaGranica) {
    alert('Broj mora biti manji od 99')
  }

  if (pokusaj > trazeniBroj) {
    alert('Moj broj je manji. Pokusaj ponovo.')
  } else if (pokusaj < trazeniBroj) {
    alert('Moj broj je veci. Pokusaj ponovo.')
  } else {
    alert('Bravo! Pobedio si!')
    break
  }
  --brPokusaja
}

if (brPokusaja === 0) {
  alert('Iskoristili ste sve pokusaje. Trazeni broj je bio ' + trazeniBroj + '.')
}
