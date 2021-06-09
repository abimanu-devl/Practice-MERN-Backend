const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const vehiclRoutes = require('./routes/vehicle.route');
const categoryRoutes = require('./routes/category.route');

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database connected')
}).catch((err) => {
    console.error(err.message)
})

app.use(express.json());
app.use('/api/vehicle', vehiclRoutes);
app.use('/api/category', categoryRoutes);

app.listen(PORT, () => {
    console.log(`server is running port ${PORT}`);
})



