import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css'
import './css/blog.css'
import './css/colorie.css'
import Img_Avator from './assets/images/avatar.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = Img_Avator;
root.render(
    <App />
);

