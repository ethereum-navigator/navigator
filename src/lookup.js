const atlas = require('@ethereum-navigator/atlas');

function lookup(
    networkId,
    chainId = null
) {
    const networks = atlas.filter((network) => network.networkId.toLowerCase() === networkId.toLowerCase());

    if (chainId) {
        const network = networks.find((network) => network.chainId &&
            network.chainId.toLowerCase() === chainId.toLowerCase());

        if (network) {
            return network
        }
    }

    return networks[0]
}

module.exports = lookup;
