import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'
// Providers
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { GlobalContextProvider } from './context/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 1 */}
    <AuthContextProvider>
      {/* 2 */}
      <GlobalContextProvider>
        {/* 3 */}
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </GlobalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
