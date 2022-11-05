'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ProfessionalsSchema = new Schema({
    professionalName: {
        type: String,
        required: 'enter professionalName'
    },
    base64Image: {
        type: String,
        required: 'enter professionalName'
    },
    nameLink: {
        type: Object,
        required: 'enter professionalName'
    },
    primaryDescription: {
        type: String,
        required: 'enter professionalName'
    },
    workDescription1: {
        type: String,
        required: 'enter professionalName'
    },
    workDescription2: {
        type: String,
        required: 'enter professionalName'
    },
    linkTitleText: {
        type: String,
        required: 'enter professionalName'
    },
    linkedInLink: {
        type: Object,
        required: 'enter professionalName'
    },
    githubLink: {
        type: Object,
        required: 'enter professionalName'
    }
})

module.exports = mongoose.model('Professionals', ProfessionalsSchema);