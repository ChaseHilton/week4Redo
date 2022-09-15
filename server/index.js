const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getCloset,
  addDrip,
  deleteDrip,
  editDrip,
} = require('./controller');

app.get('/api/compliment', getCompliment);

app.get('/api/closet', getCloset);

app.post('/api/addDrip', addDrip);

app.delete('/api/deleteDrip/:id', deleteDrip);

app.put('/api/editDrip/:id', editDrip);

app.listen(4000, () => console.log('Server running on 4000'));
