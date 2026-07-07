import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css'
import App from './App.jsx'
import "highlight.js/styles/github.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>
  </AuthProvider>
  </StrictMode>,
)
