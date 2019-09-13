const atlas = require('@ethereum-navigator/atlas');

function lookup(
    networkId,
    chainId = null
) {
    if (typeof networkId === 'number') {
        networkId = '0x' + networkId.toString(16);
    }

    const networks = atlas.filter((network) => network.networkId.toLowerCase() === networkId.toLowerCase());

    if (chainId) {
        if (typeof chainId === 'number') {
            chainId = '0x' + chainId.toString(16);
        }

        const network = networks.find((network) => network.chainId &&
            network.chainId.toLowerCase() === chainId.toLowerCase());

        if (network) {
            return network
        }
    }

    return networks[0]
}

module.exports = lookup;
