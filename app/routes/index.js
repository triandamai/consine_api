'use strict';

const express = require('express');
const router = express.Router();

const manual = require('../controller/consine_manual')
const manual2 = require('../controller/consine_manual2')
const manual3 = require('../controller/consine_manual3')

router.get("/tes1", manual.index);
router.get("/tes2", manual2.index);

module.exports = router