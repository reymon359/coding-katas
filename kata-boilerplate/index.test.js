const {defaultFunction} = require('./index');


describe('defaultFunction test', ()=> {

    it('should return the param', () => {
        const mockParam = 'Hi👋🏽';
        const mockParamReturned = 'Hi👋🏽';

        const paramReturned = defaultFunction(mockParam);

        expect(paramReturned).toEqual(mockParamReturned);
    });

})