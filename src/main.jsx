import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyButDwQ1WL4N4q9Nu0LWX2B9H_MX8zPabw",
  authDomain: "coderreact-ad259.firebaseapp.com",
  projectId: "coderreact-ad259",
  storageBucket: "coderreact-ad259.appspot.com",
  messagingSenderId: "995996554045",
  appId: "1:995996554045:web:7144fcfe9d8bb5406beb54"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
