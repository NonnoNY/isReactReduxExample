var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []

}
 

var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('search for?', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});
// unsubscribe();

 

var currentState = store.getState();


var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'CIAO!'
};

store.dispatch(action);

store.dispatch({
    type: "CHANGE_SEARCH_TEXT",
    searchText: 'Bene!'
});

//console.log('action change', store.getState());