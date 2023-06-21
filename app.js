const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const brandRoutes = require('./routes/brands');
const addonRoutes = require('./routes/addons');
const addonCategoryRoutes = require('./routes/addoncategories');

app.use(cors());
app.use(bodyParser.json());

app.use('/brands', brandRoutes);
app.use('/brands', addonRoutes);
app.use('/brands', addonCategoryRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
