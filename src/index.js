import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './store/slices/mainReducer';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';
import store from './store/slice/mainReducer';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
let persistor=persistStore(store);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
    <App />
        </PersistGate>
    </BrowserRouter>
  </Provider>
);
