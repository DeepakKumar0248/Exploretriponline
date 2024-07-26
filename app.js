require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./src/utils/db');
const FaqRouter = require("./src/routes/FaqRouter");
const CabsRouter = require('./src/routes/CabsRouter');
const FlightsonewayRouter = require('./src/routes/FlightsonewayRouter');
const InsuranceRouter = require('./src/routes/InsuranceRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Ensure express can parse JSON

app.use('/faq', FaqRouter);
app.use('/cabs', CabsRouter);
app.use('/flightsoneway', FlightsonewayRouter);
app.use('/insurance', InsuranceRouter);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
