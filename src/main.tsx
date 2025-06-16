import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChessBoard from './ChessBoard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChessBoard/>
  </StrictMode>,
)
