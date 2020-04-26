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

  function addListItem(pokemon) {
    var pokemonList = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    //adding an event listener to the button - creating it was enough, no need to querySelector it
    button.addEventListener('click', function(event) {
      //calling showDetails as the event handler function
      showDetails(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add('my-button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})(); // end of IIFE

function myLoopFunction(pokemon){
  pokemonRepository.addListItem(pokemon);
}

pokemonRepository.getAll().forEach(myLoopFunction);
