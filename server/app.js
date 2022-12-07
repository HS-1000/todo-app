const express = require('express');
const app = express();
// const PORT = 8000;
const { URL, PORT } = require('./urlInfo.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`${URL}:${PORT}`);
});