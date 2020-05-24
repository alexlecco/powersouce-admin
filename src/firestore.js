import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDG9uQcRVbFQomfWhtz6CbywCq_d7mIeOQ",
  authDomain: "powersouce-d6a2a.firebaseapp.com",
  databaseURL: "https://powersouce-d6a2a.firebaseio.com",
  projectId: "powersouce-d6a2a",
  storageBucket: "powersouce-d6a2a.appspot.com",
  messagingSenderId: "686831413016",
  appId: "1:686831413016:web:d46b2b10d37d28ea82a06d",
  measurementId: "G-J3G2HSP81Q"
};

firebase.initializeApp(firebaseConfig)

export default firebase