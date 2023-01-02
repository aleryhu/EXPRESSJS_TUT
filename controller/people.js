/** @format */
// ? CONTROLLERS HOLDS COMMON FUNCTIONS OF SIMILAR ROUTE

let { people } = require('../data');


const getPeople = (req, res) => {
  res.status(200).json({ sucess: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ sucess: false, msg: 'Provide name Value' });
  }
  res.status(201).json({ sucess: true, person: name });
};

const createSinglePerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ sucess: false, msg: 'Provide name Value' });
  }
  const data = { name: name };
  res.status(201).json({ sucess: true, data: [...people, data] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    res.status(404).json({ sucess: false, msg: `No person with id: ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ sucess: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => {
    return person.id === Number(req.params.id);
  });
  if (!person) {
    res
      .status(404)
      .json({ sucess: false, msg: `No person with id: ${req.params.id}` });
  }
  const newPeople = people.filter((person) => {
    return person.id !== Number(req.params.id);
  });
  return res.status(200).json({ sucess: true, data: newPeople });
};
module.exports = {
  getPeople,
  createPerson,
  createSinglePerson,
  updatePerson,
  deletePerson,
};
