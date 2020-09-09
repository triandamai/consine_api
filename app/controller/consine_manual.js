'use strict';

exports.index = function(req,res){
const str1 = 'This is an example to test cosine similarity between two strings';
const str2 = 'This example is testing cosine similatiry for given two strings';

const str1Words = str1.trim().split(' ').map(omitPunctuations).map(toLowercase);
const str2Words = str2.trim().split(' ').map(omitPunctuations).map(toLowercase);
const allWordsUnique = Array.from(new Set(str1Words.concat(str2Words)));


const str1Vector = calcTfIdfVectorForDoc(str1Words, [str2Words], allWordsUnique);
const str2Vector = calcTfIdfVectorForDoc(str2Words, [str1Words], allWordsUnique);

    res.json({
        "sample1":str1,
        "sample2":str2,
        "tf-idf1":str1Words,
        "tf-idf2":str2Words,
        "vector1":str1Vector,
        "vector2":str2Vector,
        "real":cosineSimilarity(str1Vector, str2Vector),
      "similarity(100%)":getSimilarityScore(cosineSimilarity(str1Vector, str2Vector))
    }),
    res.end();
}

function cosineSimilarity(vec1, vec2) {
    const dotProduct = vec1.map((val, i) => val * vec2[i]).reduce((accum, curr) => accum + curr, 0);
    const vec1Size = calcVectorSize(vec1);
    const vec2Size = calcVectorSize(vec2);
  
    return dotProduct / (vec1Size * vec2Size);
  };
  function getSimilarityScore(val){
    return Math.round(val * 100)
}
  //
// tf-idf algorithm implementation (https://en.wikipedia.org/wiki/Tf%E2%80%93idf)
//
  function calcTfIdfVectorForDoc(doc, otherDocs, allWordsSet) {
    return Array.from(allWordsSet).map(word => {
      return tf(word, doc) * idf(word, doc, otherDocs);
    });
  };
  
  function tf(word, doc) {
    const wordOccurences = doc.filter(w => w === word).length;
    return wordOccurences / doc.length;
  };
  
  function idf(word, doc, otherDocs) {
    const docsContainingWord = [doc].concat(otherDocs).filter(doc => {
      return !!doc.find(w => w === word);
    });
  
    return (1 + otherDocs.length) / docsContainingWord.length;
  };
  //
// Helper functions
//

function omitPunctuations(word) {
    return word.replace(/[\!\.\,\?\-\?]/gi, '');
  };
  
  function toLowercase(word) {
    return word.toLowerCase();
  };
  
  function calcVectorSize(vec) {
    return Math.sqrt(vec.reduce((accum, curr) => accum + Math.pow(curr, 2), 0));
  };
