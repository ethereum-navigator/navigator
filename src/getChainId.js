async function getChainId(web3) {
    return new Promise((resolve, reject) => {
        web3.currentProvider.send({
            method: "eth_chainId",
            params: [],
            jsonrpc: "2.0",
            id: 1
        }, (err, response) => {
            if (err) {
                reject()
            } else {
                resolve(response.result)
            }
        })
    })
}

module.exports = getChainId;
