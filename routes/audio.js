const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/:file/:type', (req, res) => {
    let fileName = req.params.file;
    let type = req.params.type || "mp3";

    res.set({'Content-Type': `audio/${type}`});
    res.status(200).sendFile(path.resolve(__dirname, '../', 'assets', 'audio', `${fileName}.${type}`)).end();
});

module.exports = router;