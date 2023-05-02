import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './countdown/Countdown.jsx';
import Countdown from './countdown/Countdown.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Countdown/>
  </React.StrictMode>,
)
