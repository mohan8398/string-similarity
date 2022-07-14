var compareStrings = require('compare-strings');

var similarity = compareStrings('Olive-green table for sale, in extremely good condition.', 
'For sale: table in very good  condition, olive green in colour.');

console.log(similarity)