require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict drum off uphold drift rifle magic concert grace brave bridge genre'; 
let testAccounts = [
"0x2d4bdfc275e4faec7554bc73fe05ee2a549d1eb697acf2fe616965c6756421ee",
"0x42d97b1ee97d54e0e71e9dae4067fed4f9569362c87f5c852d9c367b38e2f852",
"0xd61fff70cd2d60546cd3c0b368386119289234aa2123d9cdb6e002510e800d21",
"0x1fa370668fb76071bdd223b385f90bb481a75200aaff7c0dea0b28778a6f00dc",
"0xc049321720ffd80c1dc78a7d522089b314b39be4cf9241ddc7dd04407640f8c1",
"0x00d4220942464ccfd0fc35f19209607bacafde7ab1e2c943881600f31a1b2931",
"0xff1a20421b8f742a8efdf57e59195f48fe8dd4667e493612419845877136ac2f",
"0x3d333b67e6dfa90aa174755410b7c6d2b8c9db26ddb7d8a4fb4944b5c6a76ab0",
"0x4de2b94e60440ca99f7f87aa82ea4fa3ec5cd82b7cc26d628dc95b613c678323",
"0xa198e683191673b7be4df48392732cb82589a32045af1cde197232284151d9fa"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

