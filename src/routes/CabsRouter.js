const express = require("express");
const CabsRouter = express.Router();
const { createCabsController,deleteCabs,updateCabs,getAllCabs, getSingleCabs} = require("../controller/CabsController");

CabsRouter.post('/create', createCabsController);
CabsRouter.get('/getallcabs', getAllCabs); // Define this route before dynamic routes
CabsRouter.get('/:Cabs_id', getSingleCabs);
CabsRouter.delete('/:Cabs_id', deleteCabs);
CabsRouter.put('/:Cabs_id', updateCabs);


module.exports = CabsRouter;