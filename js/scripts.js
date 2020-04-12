//IIFE wrap
var pokemonRepository = (function () {
  var repository = [ // original repository moved into the wrap - no changes made
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
  ]; // end of repository


// defining public functions separately
  function getAll() {
    return repository;
  }

  function add(pokemon) {
    repository.push(pokemon);
  }

  return {
    add: add,
    getAll: getAll
  };
})(); // end of IIFE

function myLoopFunction(pokemon){
  document.write('<h3>' +  pokemon.name + '</h3>');
  document.write('<p>'
    + ' Height: ' +  pokemon.height + '<br>'
    + ' Abilities: ' +  pokemon.abilities + '<br>'
    + ' Type: ' +  pokemon.types +
    '</p>');
}

pokemonRepository.getAll().forEach(myLoopFunction); //not sure how to rewrite the forEach for the IIFE - not working
