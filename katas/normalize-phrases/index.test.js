const {inputNormalizer} = require('./index');


describe('sentence normalizer', ()=> {

    it('should normalize a sentence without language', () => {
        const mockSentence = 'Hola Giorgio y Ramon';
        const mockSentenceNormalized = ['HOLA', 'GIORGIO', 'Y', 'RAMON'];

        const sentenceNormalized = inputNormalizer(mockSentence);

        expect(sentenceNormalized).toEqual(mockSentenceNormalized);
    });

    it('should normalize a sentence in Spanish', () => {
        const mockSentence = 'Hola Matteos';
        const mockSentenceNormalized = ['HOLA', 'MATTEO'];

        const sentenceNormalized = inputNormalizer(mockSentence, 'ES');

        expect(sentenceNormalized).toEqual(mockSentenceNormalized);
    });

    it('should normalize a sentence in Arabic', () => {
        const mockSentence = 'Hola Sdaniel';
        const mockSentenceNormalized = ['HOLA', 'DANIEL'];

        const sentenceNormalized = inputNormalizer(mockSentence, 'AR');

        expect(sentenceNormalized).toEqual(mockSentenceNormalized);
    });

})