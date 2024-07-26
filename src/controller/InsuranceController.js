const InsuranceModel = require("../model/InsuranceModel");

const createInsuranceController = async (req, res) => {
  try {
    const insuranceData = req.body;
    const resData = await InsuranceModel.insertMany(insuranceData);
    res.json({
      status: "success",
      message: "Insurance data created successfully",
      data: resData,
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: err.message,
    });
  }
};

const getSingleInsurance = async (req, res) => {
  try {
    const Insuranceid = req.params.Insurance_id;
    const cabData = await InsuranceModel.findOne({ _id: Insuranceid });
    res.json({
      status: "success",
      data: cabData,
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: err.message,
    });
  }
};

const getAllInsurance = async (req, res) => {
    try {
      const insuranceData = await InsuranceModel.find();
      res.json({
        status: "success",
        data: insuranceData,
      });
    } catch (err) {
      res.json({
        status: "failed",
        message: err.message,
      });
    }
  };

module.exports = {
  createInsuranceController,
  getSingleInsurance,
  getAllInsurance
};
