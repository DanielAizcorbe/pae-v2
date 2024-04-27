import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AZUL_OSCURO, AZUL_PRIMARIO, BLANCO } from './components/datos/colores';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: AZUL_PRIMARIO
        },
        components: {
          Collapse: {
            headerBg: AZUL_OSCURO,
            colorTextHeading: BLANCO
          },
          Table: {
            headerBg: AZUL_PRIMARIO,
            headerColor: BLANCO
          }
        }
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>

);
