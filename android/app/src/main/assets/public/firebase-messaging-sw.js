importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyD1c0o7ZwynyMjf8OXxjQ2GLWDLiKGgpGg",
    authDomain: "systemawaryjny-56f6b.firebaseapp.com",
    projectId: "systemawaryjny-56f6b",
    storageBucket: "systemawaryjny-56f6b.firebasestorage.app",
    messagingSenderId: "649847892441",
    appId: "1:649847892441:web:b9745a9e1cb09edb6591c8"
});

const messaging = firebase.messaging();