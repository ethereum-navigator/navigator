const Web3 = require("web3");
const lookup = require('./lookup');
const getChainId = require('./getChainId');

async function navigate({
                            rpcUrl
                        } = {}) {

    const web3 = new Web3(rpcUrl);

    const networkId = await web3.eth.net.getId();
    const networkIdHex = '0x' + networkId.toString(16);
    let chainIdHex = await getChainId(web3)
        .catch(() => {
            console.warn('Unable to get chainId')
        });

    const network = lookup(networkIdHex, chainIdHex) || {
        networkId: networkIdHex
    };

    if (chainIdHex && !network.chainId &&
        chainIdHex.toLowerCase() !== networkIdHex.toLowerCase()) {
        network.chainId = chainIdHex;
    }

    return network
}

module.exports = navigate;
