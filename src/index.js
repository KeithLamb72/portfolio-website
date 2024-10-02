//
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './assets/styles.css'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
