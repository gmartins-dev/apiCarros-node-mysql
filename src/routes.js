const express = require('express');
const router = express.Router();

const CarController = require('./controllers/CarController');

router.get('/cars', CarController.searchAll);
router.get('/car/:carCode', CarController.searchCar);
router.post('/car', CarController.insert);
router.put('/car/:carCode', CarController.update);
router.delete('/car/:carCode', CarController.delete);

module.exports = router;

