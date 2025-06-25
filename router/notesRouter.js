const express = require('express');
const router = express.Router();

const {createNote} = require('../controllers/noteController');
const {getNote} = require('../controllers/noteController');
const {updateNote} = require('../controllers/noteController');
const {deleteNote} = require('../controllers/noteController');




router.post('/', createNote);
router.get('/', getNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
