// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './lang/i18n.js';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SocketContextProvider } from './context/SocketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
  // </React.StrictMode>,
)
