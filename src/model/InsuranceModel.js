const mongoose= require('mongoose');
const Collection = require('../config/Collection');
require('../config/db')

const CoverageSchema = new mongoose.Schema({
    Coverage: String,
    SumInsured: String,
    Excess: String // You can adjust this type based on actual data type
}, { _id: false }); // Disable _id for subdocuments

// Define the main schema
const InsuranceSchema = new mongoose.Schema({
    APIIndex: String,
    ResultIndex: Number,
    PlanCode: String,
    PlanType: Number,
    PlanName: String,
    PlanDescription: String,
    PlanCoverage: Number,
    CoverageDetails: [CoverageSchema],
    PlanCategory: Number,
    PremiumList: [
        {
            PassengerCount: Number,
            MinAge: Number,
            MaxAge: Number,
            Price: {
                Currency: String,
                GrossFare: Number,
                PublishedPrice: Number,
                PublishedPriceRoundedOff: Number,
                OfferedPrice: Number,
                OfferedPriceRoundedOff: Number,
                CommissionEarned: Number,
                TdsOnCommission: Number,
                ServiceTax: Number,
                SwachhBharatTax: Number,
                KrishiKalyanTax: Number
            },
            CancellationCharge: Number
        }
    ],
    Price: {
        Currency: String,
        GrossFare: Number,
        PublishedPrice: Number,
        PublishedPriceRoundedOff: Number,
        OfferedPrice: Number,
        OfferedPriceRoundedOff: Number,
        CommissionEarned: Number,
        TdsOnCommission: Number,
        ServiceTax: Number,
        SwachhBharatTax: Number,
        KrishiKalyanTax: Number
    },
    PolicyStartDate: Date,
    PolicyEndDate: Date
}, { timestamps: true });

const InsuranceModel = mongoose.model(Collection.Insurance,InsuranceSchema);
module.exports = InsuranceModel;