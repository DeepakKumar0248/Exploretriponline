const express = require("express");
const { createInsuranceController, getSingleInsurance, getAllInsurance } = require("../controller/InsuranceController");
const InsuranceRouter = express.Router();

const cors = require('cors');
InsuranceRouter.use(cors());

InsuranceRouter.post('/create', createInsuranceController);
InsuranceRouter.get('/getallinsurance', getAllInsurance); 
InsuranceRouter.get('/:Insurance_id', getSingleInsurance);
// InsuranceRouter.delete('/:Cabs_id', deleteCabs);
// InsuranceRouter.put('/:Cabs_id', updateCabs);


module.exports = InsuranceRouter;