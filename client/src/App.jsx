import { useState } from 'react'

import CanvasModel from './canvas'
import Home from './pages/Home'
import Customizer from './pages/Customizer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app transition-all">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}

export default App
