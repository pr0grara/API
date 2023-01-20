const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.status(200).send('image').end();
});

router.get('/src/:file-:type', (req, res) => {
    let fileName = req.params.file;
    let type = req.params.type || "png";
    let filePath = path.resolve(__dirname, "../", "assets", "image", `${fileName}.${type}`);

    res.set({'Content-Type': `image/${type}`});
    res.status(200).sendFile(filePath)
});

module.exports = router;