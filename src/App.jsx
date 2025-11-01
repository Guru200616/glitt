import React from 'react'
import Header from './components/Header'
import IconGrid from './components/IconGrid'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <section className="hero">
          <h1>Glitt</h1>
          <p>Creative icon-driven UI with Pexelicons-style effects</p>
        </section>

        <section className="icons-section">
          <h2>Icons & Effects</h2>
          <IconGrid />
        </section>
      </main>
    </div>
  )
}
