'use strict';

const express = require('express');
const router = express.Router();

const calc1 = require('../controller/calculate_consine2');
const calc2 = require('../controller/calculate_consine');
const rawdoc = require('../controller/extract_document');
const storage = require('../controller/upload_file');
const user = require('../controller/user');

router.get('/users', user.getuser);
router.get('/users/:id', user.getuserwhere);
router.post('/users/insert', user.saveuser);
router.post('/users/update/:id', user.updateuser);
router.post('/users/delete/:id', user.deleteuser);
router.post('/users/login', user.login);

router.get('/consine1', calc1.index);
router.get('/consine2', calc2.index);
router.get('/rawdoc', rawdoc.index);
router.post('/upload', storage.index);

router.get('/', function (req, res) {
  res.json({
    data: 'Hai this is test',
  });
  res.end();
});

module.exports = router;
