var redux = require('redux');

console.log('Starting redux example');




// Name remove and aciton generators
var nameReducer = (state = 'Anonymous', action) => {

  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name

    default:
      return state;
  }

};
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

// hobbie remove and aciton generators
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }

      ];

    case 'REMOVE_HOBBY':
      return state.filter((hobby) =>
        hobby.id !== action.id
      );

    default:
      return state;
  }

};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}

// Movie remove and aciton generators
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }

      ];

    case 'REMOVE_MOVIE':
      return state.filter((movie) =>
        movie.id !== action.id
      );

    default:
      return state;
  }

};

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
}

var removeMovie= (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}

var reducer = redux.combineReducers({

  payload: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer


});


var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.payload);
  document.getElementById('app').innerHTML = state.payload;

  console.log('new state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);
store.dispatch(changeName('Matteo'));

store.dispatch(addHobby('Walking'));
store.dispatch(addHobby('Play Guitar'));
store.dispatch(addHobby('BabySit Chase'));
store.dispatch(removeHobby(3));

store.dispatch(changeName('Bene!'));

store.dispatch(addMovie('Roge One', 'Star Wars'));
store.dispatch(addMovie('Better Call Saul', 'Drama'));
store.dispatch(addMovie('House of Cards', 'Political Drama'));
store.dispatch(removeMovie(2));


