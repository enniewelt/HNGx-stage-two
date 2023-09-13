const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid name`,
      },
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
