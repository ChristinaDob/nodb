const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const lipController = require('./controller/lipController');

app.use(bodyParser.json());

app.get('/api/colors', lipController.lipRead);
app.put('/api/colors/:id', lipController.lipUpdate);
app.post('/api/colors', lipController.lipCreate);
app.delete('/api/colors/:id', lipController.lipDelete);

const PORT = 4000;
app.listen(PORT, () => console.log(`My server is listening on port ${PORT}`));
