## Ethereum Navigator

Imagine you are on a ship staring at the horizon. Suddenly you see an island, are you curious which island it is?

Ethereum Navigator is a tool to navigate thru the endless amount of networks in the Ethereum universe.


## Navigator

An access layer on top of the ethereum-navigator/atlas written in pure JavaScript.


### Installation

```bash
npm install --save @ethereum-navigator/navigator
```

### Usage

```javascript
const Navigator = require('@ethereum-navigator/navigator');

const network = await Navigator.navigate({
    rpcUrl: "https://your-rpc-url"
})
```

