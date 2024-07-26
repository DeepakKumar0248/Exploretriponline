const express = require("express");
const FaqRouter = express.Router();
const { createFaqController,deleteFaq,updateFaq,getAllFaq} = require("../controller/FaqController");

FaqRouter.post('/create', createFaqController);
FaqRouter.delete('/:faq_id',deleteFaq)
FaqRouter.put('/:faq_id',updateFaq)
FaqRouter.put('/:faq_id',updateFaq)
FaqRouter.get('/getallfaq',getAllFaq)


module.exports = FaqRouter;