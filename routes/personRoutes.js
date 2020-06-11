const router = require('express').Router()
const { Person } = require('../models')

// GET all people
router.get('/people', (req, res) => {
  Person.find()
    .then(people => res.json(people))
    .catch(err => console.error(err))
})

// GET one person
router.get('/people/:id', (req, res) => {
  Person.findById(req.params.id)
    .then(person => res.json(person))
    .catch(err => console.error(err))
})

// POST one person
router.post('/people', (req, res) => {
  Person.create(req.body)
    .then(person => res.json(person))
    .catch(err => console.error(err))
})

// PUT one person
router.put('/people/:id', (req, res) => {
  Person.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one person
router.delete('/people/:id', (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router