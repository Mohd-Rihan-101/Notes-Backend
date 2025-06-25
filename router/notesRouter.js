const express = require('express');
const router = express.Router();

const {createNote} = require('../controllers/noteController');
const {getNote} = require('../controllers/noteController');
const {updateNote} = require('../controllers/noteController');



router.post('/', createNote);
router.get('/', getNote);
router.put('/:id', updateNote);

module.exports = router;
