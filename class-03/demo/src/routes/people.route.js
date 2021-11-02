'use strict';

const express = require('express');

const { People } = require('../models/index');

const peopleRouter = express.Router();


// RESTful Route Delectation 
peopleRouter.get('/people', getPeople); // get all the people form the DB
peopleRouter.get('/people/:id', getOnePerson); // gets a person by ID
peopleRouter.post('/people', createPerson); // creating a new person
peopleRouter.put('/people/:id', updatePerson); // updating a person by their ID
peopleRouter.delete('/people/:id', deletePerson); // deleting a person by their ID


async function getPeople(req, res) {

  const allPeople = await People.findAll();
  res.status(200).json(allPeople);

}

async function getOnePerson(req, res) {
  const id = parseInt(req.params.id); // we parse the ID in case it was a string
  const person = await People.findOne({
    where: {
      id: id
    }
  });
  res.status(200).json(person);
}

async function createPerson(req, res) {
  const obj = req.body;
  let person = await People.create(obj);
  res.status(201).json(person);

}

async function updatePerson(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let foundPerson = await People.findOne({ where: { id: id } });
  const updatedPerson = await foundPerson.update(obj);
  res.status(201).json(updatePerson);
}

async function deletePerson(req, res) {
  const id = parseInt(req.params.id);
  const deletedPerson = await People.destroy({ where: { id } });
  res.status(204).json(deletePerson);
}


module.exports = peopleRouter;

