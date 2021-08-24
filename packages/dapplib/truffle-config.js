require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember pudding include knee success gasp'; 
let testAccounts = [
"0xaff6d0d418e16c1de3e555c4ab0024229ec72b35847869d47402778d4998dfca",
"0x27786aa88298ce003307b17317f854ef974730d218ffc0f7d8a996245854cb4f",
"0xc8067244e8b6ed84add658ed018c92a0e99472e5088521b1a61966c31d38fb76",
"0x0bf7a3289d7d2e422122d097369f6ef53d345795ecd64835d2a991182d2ebc7a",
"0xc733a0cb78955227dc1a56db1c9f2b32d76528066aea677aa07f9916e1dc9aa7",
"0x071266ed3270aff98320455baf82bc9542243edf925aa01ecd06b3781bb8d26d",
"0x06343ace39eb60de7f3c9f938ba7ddea70d78f3c88e6d0b3ec7c86935b2c72ea",
"0x7cfaa668115f35a168917a2b004e1e0ebd64d96094680f465a0df6f4491059c6",
"0xeba9362274ee806bebba53852112e1b4ab13651ede717e54eae1fcaf00a63c9b",
"0xc5aee821a0cf412de2145685f926e31b60a1255711a4fc6e6cb984c3bdb0fd6d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

