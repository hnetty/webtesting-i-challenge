const enhancer = require('./enhancer.js');
// test away
describe.only('testing enchantment', () => {
    it('tests the enchantments', () => {
        expect({ enchantment: 5}).not.toBe({ enchantment: 5});

    })
})

describe("enhancer", () => {
    describe("repair()", () => {
        it('returns the durability value', () => {
            expect(enhancer.repair(50)).toBe(100);
        })
    })
})