require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sms', (req, res) => {
    const from = req.body.From;
    const message = req.body.Body;

    console.log(`Melding fra ${from}: ${message}`);

    res.send(`<Response><Message>Takk for meldingen!</Message></Response>`);
});

app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}`);
});