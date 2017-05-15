import firebase from 'firebase';

try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env.STORAGE_BUCKET,
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();

// wipes out the db
// firebaseRef.set({
//     app: {
//         name: 'Ciao Todo App',
//         version: '1.0.0'
//     }
// });



firebaseRef.child('app').update({
    name: 'zMio Todo App',
    version: '1.0.1'
}).then(() => {
    // console.log("update successful!");
}, (e) => {
    console.errror('update failed! ', e);
});

// excersise

// var todosRef = firebaseRef.child('todos');
// todosRef.push({
//     text: "todo: Walk the dog1!"
// });

// todosRef.push({
//     text: "todo: Walk the dog2!"
// });


// todosRef.on('child_added', (snaptshot) => {
//     console.log('todo child added...', snaptshot.key, snaptshot.val());
// });


// var notesRef = firebaseRef.child('notes');
// var newNoteRef = notesRef.push({
//     text: "Walk the dog!"
// });

// console.log('new id? ', newNoteRef.key);

// notesRef.on('child_added', (snaptshot) => {
//     console.log('child added...', snaptshot.key, snaptshot.val());
// });

// notesRef.on('child_changed', (snaptshot) => {
//     console.log('child changed...', snaptshot.key, snaptshot.val());
// });

// notesRef.on('child_removed', (snaptshot) => {
//     console.log('child removed...', snaptshot.key, snaptshot.val());
// });


// var newNoteRef = notesRef.push();
// newNoteRef.set({
//     text: "Walk the dog!!!"
// })


// firebaseRef.child('todos').update({
//     'howdy123': {
//         id: 'howdy123',
//         text: 'Ciao dude!'
//     }

// }).then(() => {
//     // console.log("update successful!");
// }, (e) => {
//     console.errror('update failed! ', e);
// });

// excersise

// 2) on change child ref
// var logdata = (snapshot) => {
//     console.log('snapshot got value', snapshot.val());
// };

// // // 2
// firebaseRef.child('app').on('value', logdata);

// // //2) cancel
// firebaseRef.child('app').off('value', logdata);


// // 1) on change
// firebaseRef.on('value', (snapshot) => {
//     console.log('got value', snapshot.val());
// });

// //1) cancel
// firebaseRef.off();


// 2) on change
// var logdata = (snapshot) => {
//     console.log('got value', snapshot.val());
// };

// // 2
// firebaseRef.on('value', logdata);

// //2) cancel
// firebaseRef.off('value', logdata);


// firebaseRef.child.('app').once('value').then((snapshot) => {
//     console.log('got the entire db', snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('unable to fetch', e);
// });

// firebaseRef.once('value').then((snapshot) => {
//     console.log('got the entire db', snapshot.val());
// }, (e) => {
//     console.log('unable to fetch', e);
// });

// remove all
//firebaseRef.remove();
//firebaseRef.child('app/name').remove();
// null removes the reference
// firebaseRef.child('app').update({
//     version: null
// }).then(() => {
//     console.log("update to remove successful!");
// }, (e) => {
//     console.log('update failed! ', e);
// });


// multi-path update
// firebaseRef.update({
//     'app/name': 'Mio Mio Todo App'
// });

export default firebase;