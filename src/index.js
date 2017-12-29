import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App';
import registerServiceWorker from './config/registerServiceWorker';
import './styles/index.css'

ReactDOM.render(
    
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();