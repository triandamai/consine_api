'use strict';

const express = require('express');
const router = express.Router();

const calc1 = require('../controller/calculate_consine2')
const calc2 = require('../controller/calculate_consine')
const rawdoc = require('../controller/extract_document')
const storage = require('../controller/upload_file')


router.get("/consine1", calc1.index)
router.get("/consine2", calc2.index)
router.get("/rawdoc", rawdoc.index)
router.post(" /upload",storage.index)


router.get("/",function(req,res){
    res.json({
        "data":"Hai this is test"
    })
    res.end()
})

module.exports = router