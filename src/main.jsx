import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Theme } from './Theme'
import {HandleContext} from './Context/AuthContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HandleContext>
  <Theme/>
  </HandleContext>
  </React.StrictMode>
)
