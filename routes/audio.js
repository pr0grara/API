const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.status(200).send('audio').end();
});

router.get('/src/:file-:type', (req, res) => {
    let fileName = req.params.file;
    let type = req.params.type || "mp3";
    let filePath = path.resolve(__dirname, "../", "assets", "audio", `${fileName}.${type}`);

    res.set({'Content-Type': `audio/${type}`});
    res.status(200).sendFile(filePath);
});

module.exports = router;