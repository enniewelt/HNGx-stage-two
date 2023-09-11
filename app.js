const express = require('express');
const mongoose = require('mongoose');
const Person = require('./models/personModel');
require('dotenv').config();

const app = express();

app.use(express.json());

app.post('/api', async (req, res) => {
  try {
    const person = await Person.create(req.body);
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/:name', async (req, res) => {
  try {
    const person = await Person.findOne({ name: req.params.name });
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json(person);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

app.put('/api/:name', async (req, res) => {
  try {
    const person = await Person.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      {
        new: true,
      }
    );
    if (!person) {
      return res.status(400).json({ error: 'Person not found' });
    }
    res.status(200).json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/:name', async (req, res) => {
  try {
    const person = await Person.findOneAndDelete({ name: req.params.name });
    if (!person) {
      return res.status(400).json({ error: 'Person not found' });
    }
    res.status(204).json({
      message: 'Person deleted',
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log('Server error', error);
  }
};

start();
