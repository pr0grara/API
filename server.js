const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const audio = require('./routes/audio');
const image = require('./routes/image');
const icon = require('./routes/icon');

app.use('/audio', audio);
app.use('/image', image);
app.use('/icon', icon);

app.get('/', (req, res) => {
    res.status(200).send("API HOME").end()
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));