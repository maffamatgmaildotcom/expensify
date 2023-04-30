import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// }, (error) => {
//   console.log('Error with data fetching', e);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'first one',
//   amount: 36500,
//   createdAt: 4123478913
// });

// database.ref('expenses').push({
//   description: 'Phone Bill',
//   note: 'second one',
//   amount: 3600,
//   createdAt: 4123478913
// });

// database.ref('expenses').push({
//   description: 'Food',
//   note: 'third one',
//   amount: 36500,
//   createdAt: 4123478913
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     asdfsakey: {
//       title: 'First note!',
//       body: 'this is my note'
//     },
//     asdfsakey2: {
//       title: 'First note!',
//       body: 'this is my note'
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase ',
//   title: 'Another  note!',
//   body: 'This is my note'
// }]

// database.ref('notes').set('notes');

// // subscribe
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (error) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// // unsubscribe
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data: ', e);
//   });

// database.ref().set({
//   name: 'Mike Maffa',
//   age: 24,
//   stressLevel: 6,
//   job: {
//     title: 'Software  developer',
//     company: 'Google'
//   },
//   location : {
//     city: 'Boxborough',
//     country: "United States"
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// })

// database.ref().update({ 
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().update({
//   name: 'Andrew',
//   age: 29, 
//   job: 'Software developer',
//   isSingle: null
// });

// database.ref().update({ 
//   job: 'Manager',
//   'location/city': 'Philadelphia'
// });


// database.ref().set('This is my data');

//database.ref('age').set(27);
//database.ref('location/city').set('Boston');

// database.ref('attributes').set({
//   height: 71,
//   weight: 195
// }).then(() => {
//   console.log('attributes data is saved');
// }).catch((e) => {
//   console.log('attributes set failed', e);
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });