var giocatore1 = {
  foto: 'desciglio.jpg',
  nome: 'De Sciglio',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFattiDifensore(),
  media_voto: mediaVoto(),
}
var giocatore2 = {
  nome: 'Chiellini',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFattiDifensore(),
  media_voto: mediaVoto(),
}
var giocatore3 = {
  nome: 'Benatia',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFattiDifensore(),
  media_voto: mediaVoto(),

}
var giocatore4 = {
  nome: 'Alex Sandro',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFattiDifensore(),
  media_voto: mediaVoto(),

}
var giocatore5 = {
  nome: 'Barzagli',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFattiDifensore(),
  media_voto: mediaVoto(),
}
var giocatore6 = {
  nome: 'Rugani',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFattiDifensore(),
  media_voto: mediaVoto(),
}
var giocatore7 = {
  nome: 'Lichtsteiner',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFattiDifensore(),
  media_voto: mediaVoto(),
}
var giocatore8 = {
  nome: 'Pjanic',
  posizione:'Centrocampo',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore9 = {
  nome: 'Marchisio',
  posizione:'Centrocampo',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore10 = {
  nome: 'Khedira',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore11 = {
  nome: 'Matuidi',
  posizione:'Centrocampo',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore12 = {
  nome: 'Asamoah',
  posizione:'Difensore',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore13 = {
  nome: 'Sturaro',
  posizione:'Centrocampo',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore14 = {
  nome: 'Cuadrado',
  posizione:'Attacco',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore15 = {
  nome: 'Higuain',
  posizione:'Attacco',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore16 = {
  nome: 'Dybala',
  posizione:'Attacco',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore17 = {
  nome: 'Costa',
  posizione:'Attacco',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore18 = {
  nome: 'Mandzukic',
  posizione:'Attacco',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}
var giocatore19 = {
  nome: 'Bernardeschi',
  posizione:'Attacco',
  partite_giocate:partiteGiocate(),
  goal_fatti: goalFatti(),
  media_voto: mediaVoto(),
}

var giocatoriJuve = [giocatore1,giocatore2,giocatore3,giocatore4,giocatore5,giocatore6,giocatore7,giocatore8,giocatore9,giocatore10,giocatore11,giocatore12,giocatore13,giocatore14,giocatore15,giocatore16,giocatore17,giocatore18,giocatore19];
var stat = document.getElementById('statistiche_lista')
var foto = document.getElementById('immagine')

var cerca = document.getElementById('button');
cerca.addEventListener('click', findGiocatore);

function findGiocatore() {
  var giocatore_cercato = document.getElementById('ricercato').value;
  for (var i = 0; i < giocatoriJuve.length; i++) {
    if (giocatoriJuve[i].nome.includes(giocatore_cercato)) {
      stat.innerHTML = "<li class ='statistiche'>"+ 'Nome: ' + giocatoriJuve[i].nome + '<li>' + ' Ruolo: '+ giocatoriJuve[i].posizione +'</li>' + '<li>' + 'partite giocate: ' +giocatoriJuve[i].partite_giocate +'</li>'+ '<li>'+'goal fatti: '  + giocatoriJuve[i].goal_fatti+'</li>'+'<li>'+ 'media voto: ' + giocatoriJuve[i].media_voto +'</li>'
    }
  }
}

function partiteGiocate() {
  return Math.floor((Math.random()*30)+8)
}
function goalFattiDifensore() {
  return Math.floor(Math.random()*10)
}
function goalFatti() {
  return Math.floor(Math.random()*25)
}
function mediaVoto() {
  return Math.floor((Math.random()*7)+2)
}
