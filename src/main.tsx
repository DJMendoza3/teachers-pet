import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from './layout/container/Container'
import Navbar from './layout/navbar/Navbar'
import Setup from './utils/setup/Setup'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container setup={<Setup />}>
      <Navbar />
      <h1>Teacher's Pet</h1>
    </Container>
  </React.StrictMode>,
)
