'use strict'

const imageFilter = function(req, file, cb) {
    // Accept images only
    // if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    //     req.fileValidationError = 'Only image files are allowed!';
    //     return cb(new Error('Only image files are allowed!'), false);
    // }
    if (!file.originalname.match(/\.(docx|doc|PDF)$/)) {
        req.fileValidationError = 'Only dokumen files are allowed!';
        return cb(new Error('Only dokumen files are allowed!'), false);
    }
    cb(null, true);
};
exports.imageFilter = imageFilter;