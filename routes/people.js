/** @format */
// ? ROUTES HOLDS THE MAIN ROUTES OF THE APP

const express = require('express');
const router = express.Router();
const {
  getPeople,
  createPerson,
  createSinglePerson,
  updatePerson,
  deletePerson,
} = require('../controller/people');

// ! Preference

// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/postman', createSinglePerson);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createSinglePerson)
router.route('/:id').put(updatePerson).delete(deletePerson)


module.exports = router;
