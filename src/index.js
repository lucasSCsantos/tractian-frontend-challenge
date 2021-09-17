import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import './index.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

ReactDOM.render(
  <ConfigProvider locale={ptBR}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
