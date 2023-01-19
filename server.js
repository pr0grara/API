const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const audio = require('./routes/audio');

app.use('/audio', audio);

app.get('/', (req, res) => {
    res.status(200).send("API HOME").end()
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));