var giocatore1 = {
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
