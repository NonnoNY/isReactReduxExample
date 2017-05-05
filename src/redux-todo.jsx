var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    searchText: '',
    payload: 'Anonymous',
    showCompleted: false,
    todos: []

}

var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};

   // console.log(" new action", action);

    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                payload: action.payload
            };
        default:
            return state;

    }


};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
    type: 'CHANGE_SEARCH_TEXT',
    payload: 'CIAO!'
};

store.dispatch(action);


console.log('action change', store.getState());