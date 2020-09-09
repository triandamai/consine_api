'use strict';

const multer = require('multer')
const path = require('path')
const helpers = require('../utils/helper')

exports.index = function(req,res){

    const storage = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'uploads/')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
        }
    })

    let process = multer({storage:storage,fileFilter:helpers.imageFilter}).single('doc')

    process(req,res,function(err){
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an document to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        res.json({"data":"true"})
        res.end()
    })
    
}