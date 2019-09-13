const {describe, it} = require("mocha");
const assert = require('assert');

const lookup = require('../src/lookup');

describe('lookup', () => {

    it('should return ethereum when networkId is 1', async () => {
        const network = lookup(1);
        assert.equal(network.name, 'Ethereum')
    });

    it('should return ethereum when networkId is 0x1', async () => {
        const network = lookup('0x1');
        assert.equal(network.name, 'Ethereum')
    });

    it('should return ethereum classic when networkId is 1 and chainId is 61', async () => {
        const network = lookup(1, 61);
        assert.equal(network.name, 'Ethereum Classic')
    });

    it('should return ethereum classic when networkId is 0x1 and chainId is 0x3d', async () => {
        const network = lookup('0x1', '0x3d');
        assert.equal(network.name, 'Ethereum Classic')
    });

});