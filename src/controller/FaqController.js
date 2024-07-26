const FaqModel = require("../model/FaqModel");

const createFaqController = async (request, response) => {
    try {
        const body = request.body;
        const data = {
            title: body.title,
            description: body.description,
        };

        const resdata = await FaqModel.create(data);
        if (resdata) {
            response.json({
                status: "success",
                message: "Faq Created successfully",
                data: resdata,
            });
        }
    } catch (err) {
        response.json({
            status: "failed",
            message: err.message,
        });
    }
};

const deleteFaq = async (request, response) => {
    try {
        const faq_id = request.params.faq_id;
        const res = await FaqModel.deleteOne({ _id: faq_id });
        if (res) {
            response.json({
                status: "success",
                message: "Faq Deleted successfully",
            });
        }
    } catch (err) {
        response.json({
            status: "failed",
            message: "Error",
        });
    }
};

const updateFaq = async (request, response) => {
    try {
        const faq_id = request.params.faq_id;
        const body=request.body;
        const resData={
                        title:body.title,
                        description:body.description,
                    }
                    const res = await FaqModel.updateOne({_id:faq_id},resData)
        if (res) {
            response.json({
                status: "success",
                message: "Faq Update successfully",
            });
        }

    } catch (err) {
        response.json({
            status: "failed",
            message: "Error",
        });
    }
};

const getSingleFaq = async (request, response) => {
    try {
        const faq_id = request.params.faq_id;
        const res = await FaqModel.findOne({_id:faq_id})
        if (res) {
            response.json({
                status: "success",
                message: "Faq Update successfully",
            });
        }

    } catch (err) {
        response.json({
            status: "failed",
            message: "Error",
        });
    }
};

const getAllFaq = async (request, response) => {
    try {
        const res = await FaqModel.find();
        if (res) {
            response.json({
                status: "success",
                message: "Faq Data Retrieve successfully",
                data:res
            });
        }

    } catch (err) {
        response.json({
            status: "failed",
            message: "Error",
        });
    }
};


module.exports = {
    createFaqController,
    updateFaq,
    deleteFaq,
    getSingleFaq,
    getAllFaq
};
