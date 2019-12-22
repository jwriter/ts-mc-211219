import { sum } from './functions';

describe('Test functions', () => {
    it('test example', () => {
        expect(sum(1, 2, 3)).toEqual(6);
        expect(sum(1, 'asdasd', 3)).toEqual(4);
        expect(sum(1, '2', 3)).toEqual(6);
    });
});
