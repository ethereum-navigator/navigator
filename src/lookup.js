const atlas = require('@ethereum-navigator/atlas')

function lookup(
    networkId
) {
    const network = atlas.find((network) => network.networkId.toLowerCase() === networkId.toLowerCase())
    return network
}

module.exports = lookup
