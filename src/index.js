import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import store from './store/store';
import { Provider } from 'react-redux'
import {addChamado} from './store/actions/chamadosActions'

const root = ReactDOM.createRoot(document.getElementById('root'));



store.dispatch(addChamado({ id: 2, solicitante: 'Duda',  descricao: 'Teste2' }))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


