'use strict';

const mongoose = require('mongoose');

const Professional = mongoose.model('Professionals');

exports.list_all_professionals = (req, res) => {
    Professional.find({}, (err, professionals) => {
        if(err) res.send(err);
        res.json(professionals);
    })
}

exports.read_first_professional = (req, res) => {
  Professional.find({}, (err, professionals) => {
      if(err) res.send(err);
      res.json(professionals[0]);
  })
}

exports.add_a_professional = function(req, res) {
    var new_professional = new Professional(req.body);
    new_professional.save(function(err, professional) {
      if (err)
        res.send(err);
      res.json(professional);
    });
};