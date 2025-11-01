const express = require('express')
const router = express.Router()

let events = [
  { id: 1, title: 'Welcome to Glitt', date: '2025-11-10', description: 'Project launch' },
  { id: 2, title: 'Launch party', date: '2025-11-20', description: 'Celebrate' }
]

router.get('/', (req, res) => res.json(events))

router.post('/', (req, res) => {
  const { title, date, description } = req.body
  const id = events.length ? Math.max(...events.map(e => e.id)) + 1 : 1
  const ev = { id, title, date, description }
  events.push(ev)
  res.status(201).json(ev)
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  const before = events.length
  events = events.filter(e => e.id !== id)
  if (events.length === before) return res.status(404).json({ error: 'Not found' })
  res.json({ success: true })
})

module.exports = router
