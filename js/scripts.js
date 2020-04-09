var pokemonList = [
  {
    name : 'Phanpy',
    height : 0.5,
    abilities : ['Sand-veil', ' Pickup'],
    types : ['Ground'],
  },
  {
    name : 'Crustle',
    height : 1.4,
    abilities : ['Sturdy', ' Shell-armor', ' Weak-armor'],
    types : ['Bug', ' Rock'],
  },
  {
    name : 'Rhyhorn',
    height : 1.00,
    abilities : ['Lightningrod', ' Rock-head', ' Reckless'],
    types : ['Rock', ' Ground'],
  },
  {
    name : 'Psyduck',
    height : 0.8,
    abilities : ['Damp', ' Cloud-nine', ' Swift-swim'],
    types : ['Water'],
  }
];

pokemonList.forEach(function(currentPokemon){
  document.write('<h3>' +  currentPokemon.name + '</h3>');
  document.write('<p>'
    + ' Height: ' +  currentPokemon.height + '<br>'
    + ' Abilities: ' +  currentPokemon.abilities + '<br>'
    + ' Type: ' +  currentPokemon.types +
    '</p>');
});

//working code
//for (var i = 0; i < pokemonList.length; i++) {
  //document.write('<h3>' + pokemonList[i].name + '</h3>' + ' Height: ' + pokemonList[i].height)
//  if (pokemonList[i].height > 1.00) {
//    document.write(' (Wow that\'s big!)' )
//  }
//}
