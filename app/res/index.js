'use strict';

exports.ok = (val, res) => {
  var data = {
    status: 200,
    data: val,
    success: true,
    message: 'Berhasil',
  };
  res.status(200).json(data);
  res.end();
};

exports.failed = (val, res) => {
  var data = {
    status: 400,
    data: val,
    success: false,
    message: 'Gagal',
  };
  res.status(400).json(data);
  res.end();
};

exports.notfound = (val, res) => {
  var data = {
    status: 404,
    data: val,
    success: false,
    message: 'Gagal',
  };
  res.status(404).json(data);
  res.end();
};
