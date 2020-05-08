const {toSingular, toUpperCase} = require('./transformations');
const {filterPrepositions} = require('./filters');

const transformations = [toUpperCase, toSingular];

const toWords = sentence => sentence.split(' ');

const inputNormalizer = (sentence, lng) => toWords(sentence)
    .map(word => transformations.reduce((acc, transformer) => transformer(acc, lng), word));

module.exports = {
    inputNormalizer
}
 

