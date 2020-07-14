const listaGodina = document.getElementById('listaGodina')
function godine () {
  for (let i = 1900; i <= 2020; i++) {
    listaGodina.innerHTML += `<option>${i}</option>`
  }
}
godine()

/* `<option>${i}</option>` ovo sam kopirao od Pavla(hvala Pavle :D),
 nisam znao kako se pise. Ostalo sam sam odradio */
