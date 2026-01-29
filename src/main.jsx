import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

createRoot(document.getElementById('root')).render(
  // ❌ StrictMode removed to prevent SEO tag conflicts in Dev
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
)