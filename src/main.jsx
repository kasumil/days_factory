import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AlertProvider from './context/AlertProvider.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import LandingProvider from './context/LandingProvider.jsx'
import ToastProvider from './context/ToastProvider.jsx'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import ThemeProvder from './context/ThemeProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <AuthProvider>
        <LandingProvider>
          <ToastProvider>
            <ThemeProvder>
              <Router>
                <App />
              </Router>
            </ThemeProvder>
          </ToastProvider>
        </LandingProvider>
      </AuthProvider>
    </AlertProvider>
  </StrictMode>,
)
