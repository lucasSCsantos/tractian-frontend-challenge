import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import Provider from './context/DataProvider';

ReactDOM.render(
  <Provider>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
