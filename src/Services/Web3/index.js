import { ethers, utils } from 'ethers'
import { addChain } from '../../Reducer/slices/Metamask'

class Web3Services {
    static provider = new ethers.providers.Web3Provider(window.ethereum)

    static async detectNetwork() {
        const network = await this.provider.getNetwork()
        return network
    }

    static async changeNetwork() {
        const network = {
            chainId: '0x61',
            rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
            chainName: "BSC Testnet",
            nativeCurrency: {
                name: "BNB",
                symbol: "BNB",
                decimals: 18
            },
            blockExplorerUrls: ["https://testnet.bscscan.com/"]
        }
        await this.provider.send("wallet_addEthereumChain", [network])
    }

    static async signMetamask(message) {
        const signer = this.provider.getSigner()
        const sig = await signer.signMessage(message)
        return sig
    }

    static async demo() {
        const address = '0x3ee12A84DFDAA2fB3a1e7EBE875745cff206868E'
        const tokenBuy = '0x0000000000000000000000000000000000000000'
        const abi = [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_typeNFT",
                        "type": "uint256"
                    },
                    {
                        "name": "tokenBuy",
                        "type": "address"
                    }
                ],
                "name": "buyNFT",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            }
        ]
        const signer = this.provider.getSigner()
        const contract = new ethers.Contract(address, abi, signer)
        const data = await contract.populateTransaction.buyNFT(0, tokenBuy)
        let tx = {
            to: '0x64470E5F5DD38e497194BbcAF8Daa7CA578926F6',
            // Convert currency unit from ether to wei
            value: ethers.utils.parseEther('1')
        }
        this.sendTransaction(tx)
    }

    static async sendTransaction(signedTx) {
        const txHash = await this.provider.sendTransaction(signedTx)
        const receipt = await txHash.wait()
    }
}

export default Web3Services