var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  payload: 'howdy dude',
  hobbies: [],
  movies: []

}

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {

  switch (action.type) {
    case 'CHANGE_NAME':
      return action.payload

    default:
      return state;
  }

};

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

var reducer = redux.combineReducers({

  payload: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer


});

var old_reducer = (state = stateDefault, action) => {


  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        payload: action.payload
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies, {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };

    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) =>
          hobby.id !== action.id
        )
      };


    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies, {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };

    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) =>
          movie.id !== action.id
        )
      };

    default:
      return state;
  }
};
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

store.dispatch({
  type: 'CHANGE_NAME',
  payload: 'ciao!'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Play Guitar'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'BabySit Chase'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  payload: 'bene?'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Roge one',
  genre: 'Star wars'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Better Call Saul',
  genre: 'Drama'
});


store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});