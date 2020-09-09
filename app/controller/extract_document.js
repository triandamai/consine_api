'use strict'
var mammoth = require('mammoth')

exports.index = function(req,res){
    mammoth.extractRawText({path:'wkwk.docx'})
    .then(function(result){
        var text = result.value
        var start = text.search("ABSTRAK");
        var end = text.search("Kata Kunci");
        var result = text.slice(start, end);
        res.json({
            "start": start,
            "end": end,
            "hasil":result,
        })
        res.end()

    }).done()
}