const CabsModel = require("../model/CabsModel");

const createCabsController = async (req, res) => {
  try {
    const cabData = req.body;
    const resData = await CabsModel.create(cabData);
    res.json({
      status: "success",
      message: "Cab data created successfully",
      data: resData,
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: err.message,
    });
  }
};

const deleteCabs = async (req, res) => {
  try {
    const cabId = req.params.Cabs_id;
    const result = await CabsModel.deleteOne({ _id: cabId });
    res.json({
      status: "success",
      message: "Cab deleted successfully",
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: err.message,
    });
  }
};

const updateCabs = async (req, res) => {
  try {
    const cabId = req.params.Cabs_id;
    const updateData = req.body;
    const result = await CabsModel.updateOne({ _id: cabId }, updateData);
    res.json({
      status: "success",
      message: "Cab updated successfully",
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: err.message,
    });
  }
};

const getSingleCabs = async (req, res) => {
  try {
    const cabId = req.params.Cabs_id;
    const cabData = await CabsModel.findOne({ _id: cabId });
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

const getAllCabs = async (req, res) => {
  try {
    const cabsData = await CabsModel.find();
    res.json({
      status: "success",
      data: cabsData,
    });
  } catch (err) {
    res.json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  createCabsController,
  updateCabs,
  deleteCabs,
  getSingleCabs,
  getAllCabs,
};