const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const URL = 'https://www.uol.com.br/';

axios(URL)
  .then(response => {
    const html = response.data;
    console.log(html);
  })


app.listen(PORT, () => console.log(`Server working on ${PORT}`));
