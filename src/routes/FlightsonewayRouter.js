const express = require("express");
const { createFlightsonewayController } = require("../controller/FlightsonewayController");
const FlightsonewayRouter = express.Router();

FlightsonewayRouter.post('/create', createFlightsonewayController);
// FlightsonewayRouter.get('/getallcabs', getAllCabs); 
// FlightsonewayRouter.get('/:Cabs_id', getSingleCabs);
// FlightsonewayRouter.delete('/:Cabs_id', deleteCabs);
// FlightsonewayRouter.put('/:Cabs_id', updateCabs);


module.exports = FlightsonewayRouter;