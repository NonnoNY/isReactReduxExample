import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBzGnrm_5eB5zsSJWRmzq9d1k0wHjAz2YQ",
    authDomain: "noreactreact.firebaseapp.com",
    databaseURL: "https://noreactreact.firebaseio.com",
    projectId: "noreactreact",
    storageBucket: "noreactreact.appspot.com",
    messagingSenderId: "275151088031"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Andrew',
        age: 25
    }
});

firebaseRef.update({
    app: {
        name: 'Mio Todo App',
        version: '1.0.0'
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});

todosRef.push({
    text: 'Todo 2'
});