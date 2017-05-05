var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {payload: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        payload: action.payload
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
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  payload: 'ciao!'
});

store.dispatch({
  type: 'CHANGE_NAME',
  payload: 'bene?'
});