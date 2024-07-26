const mongoose = require('mongoose');
const Collection = require('../config/Collection');
require('../config/db');

const FareSchema = new mongoose.Schema({
  PricingId: Number,
  VehicleCategory: String,
  BaseFare: Number,
  OutStationPerKmRate: Number,
  OutStationExtraKmRate: Number,
  OutStationDriverAllowance: Number,
  OutStationMinKmPerDay: Number,
  OutStationPackageRate: Number,
  AllInclusive: Boolean,
  LocalPackage8HrRate: Number,
  LocalExtraKmRate: Number,
  LocalExtraHrRate: Number,
  Fixed: Boolean,
  Refundable: Boolean,
  TotalKmCharged: Number,
  TotalHrsCharged: Number,
  TotalDaysCharged: Number,
  ServiceFee: Number,
  AgentCommission: Number,
  ServiceTaxPercent: Number,
  TotalServiceTax: Number,
  TotalAmount: Number,
  AdvanceAmount: Number,
  FromDate: Date,
  ToDate: Date
}, { _id: false });

const CabsSchema = new mongoose.Schema({
  SrdvIndex: { type: String, unique: true },
  Category: String,
  Image: String,
  Availability: Number,
  SeatingCapacity: Number,
  LuggageCapacity: Number,
  AirConditioner: Boolean,
  CarNos: [String],
  Fare: FareSchema
}, { timestamps: true });

const CabsModel = mongoose.model(Collection.Cabs, CabsSchema);
module.exports = CabsModel;
