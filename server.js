const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const audio = require('./routes/audio');
const image = require('./routes/image');

app.use('/audio', audio);
app.use('/image', image);

app.get('/', (req, res) => {
    res.status(200).send("API HOME").end()
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));