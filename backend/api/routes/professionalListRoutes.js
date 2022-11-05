'use strict';
const professionalList = require('../controllers/professionalListController');

const professionalListRoutes = app => {
    app.route('/professionals')
        .get(professionalList.list_all_professionals)
        .post(professionalList.add_a_professional);
    
    app.route('/professional')
        .get(professionalList.read_first_professional);
}

module.exports = professionalListRoutes;
