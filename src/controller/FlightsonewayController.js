const FlightsonewayModel = require("../model/FlightsonewayModel");

const createFlightsonewayController = async (req, res) => {
  try {
    const cabData = req.body;
    const resData = await FlightsonewayModel.insertMany(cabData);
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

module.exports = {
    createFlightsonewayController
};