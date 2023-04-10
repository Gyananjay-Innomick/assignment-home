import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/common.css';
import './assets/css/custom.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {
  setTranslations,
  setDefaultLanguage,
  // useTranslation,
} from 'react-multi-lang';
// import pt from 'pt.json'
import en from './lang/en.json';
// Do this two lines only when setting up the application
setTranslations({ en });
setDefaultLanguage('en');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
