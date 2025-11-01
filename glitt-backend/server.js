const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// sample in-memory events
let events = [
  { id: 1, title: 'Welcome to Glitt', date: '2025-11-10', description: 'Project launch' },
  { id: 2, title: 'Launch party', date: '2025-11-20', description: 'Celebrate' }
]

// GET /api/events
app.get('/api/events', (req, res) => {
  res.json(events)
})

// POST /api/events — create simple event
app.post('/api/events', (req, res) => {
  const { title, date, description } = req.body
  const id = events.length ? Math.max(...events.map(e => e.id)) + 1 : 1
  const ev = { id, title, date, description }
  events.push(ev)
  res.status(201).json(ev)
})

// DELETE /api/events/:id
app.delete('/api/events/:id', (req, res) => {
  const id = Number(req.params.id)
  const before = events.length
  events = events.filter(e => e.id !== id)
  if (events.length === before) return res.status(404).json({ error: 'Not found' })
  res.json({ success: true })
})

app.listen(PORT, () => {
  console.log(`Glitt API listening on ${PORT}`)
})
