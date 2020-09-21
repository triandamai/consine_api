'use strict';

const multer = require('multer');
const path = require('path');
const helpers = require('../utils/helper');
const response = require('../res/index');
const conn = require('../database/index');
const uuid = require('uuid-random');

exports.index = function (req, res) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    },
  });
  let process = multer({
    storage: storage,
    fileFilter: helpers.imageFilter,
  }).single('doc');
  process(req, res, function (err) {
    if (req.fileValidationError) {
      return response.failed(req.fileValidationError, res);
    } else if (!req.file) {
      return response.failed('pilih dokumen untuk diupload', res);
    } else if (err instanceof multer.MulterError) {
      return response.failed(err, res);
    } else if (err) {
      return response.failed(err, res);
    } else {
      let sql =
        'INSERT INTO tb_repo' +
        '(id_repo,repo_id_user,repo_judul,repo_abstrak,repo_file,repo_created_at,repo_updated_at)' +
        ' VALUES ' +
        "('" +
        uuid() +
        "','" +
        uuid() +
        "','judul','abstrak','" +
        req.file.filename +
        "'," +
        Date.now() +
        ',' +
        Date.now() +
        ')';

      conn.query(sql, function (err, row, fields) {
        err ? response.failed(err, res) : response.ok(req.file, res);
      });
    }
  });
};
