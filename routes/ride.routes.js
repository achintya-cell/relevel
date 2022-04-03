//3rd Party Modules
const { Router } = require('express');

const router = Router();
const {
        getAllRide, 
        createRide, 
        } = require('../controllers/ride.controller.js');

router.post('/create', createRide);

router.get('/', getAllRide);

module.exports = router;