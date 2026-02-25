import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/luckiest-guy/400.css'; // Main website title font
import '@fontsource/russo-one/400.css'; // Header font for sections
import '@fontsource/inter/500.css' // Subheader font for areas like attire, creators, etc.
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/exo-2/400.css' // Body paragraph
import '@fontsource/exo-2/600.css'
import '@fontsource/exo-2/700.css'
import '@fontsource/exo-2/800.css'
// Teko for body? weight 400
// Anton ? weight 400
// Orbiton? weight 400, 500, 600

//import 'normalize.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
