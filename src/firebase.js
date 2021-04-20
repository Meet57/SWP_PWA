import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAgkjBuRda-LQH9U_J2HSomsrivAAo4Ry8",
    authDomain: "smartwaterpump-93a7a.firebaseapp.com",
    databaseURL: "https://smartwaterpump-93a7a-default-rtdb.firebaseio.com",
    projectId: "smartwaterpump-93a7a",
    storageBucket: "smartwaterpump-93a7a.appspot.com",
    messagingSenderId: "613525908621",
    appId: "1:613525908621:web:01e37b196408bf3774c6c4"
};

firebase.initializeApp(firebaseConfig);

export default firebase