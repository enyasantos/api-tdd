const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = 3008;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log('🔥 Server is running in port ' + PORT));

module.exports = app;
