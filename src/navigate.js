const Web3 = require("web3")
const lookup = require('./lookup')

async function navigate({
                            rpcUrl
                        } = {}) {

    const web3 = new Web3(rpcUrl);

    const networkId = await web3.eth.net.getId()
    const networkIdHex = '0x' + networkId.toString(16)

    const network = lookup(networkIdHex) || {
        networkId: networkIdHex
    }

    return network
}

module.exports = navigate
