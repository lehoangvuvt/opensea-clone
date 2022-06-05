import { ethers, utils } from 'ethers'

class Web3Services {
    static provider = new ethers.providers.Web3Provider(window.ethereum)

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
        const accounts = await this.provider.send("eth_requestAccounts", [])
        const signer = this.provider.getSigner()
        const sig = await signer.signMessage(message)
        const address = await signer.getAddress()
        return {
            sig,
            address
        }
    }

    static async demo() {
        const address = '0x3ee12A84DFDAA2fB3a1e7EBE875745cff206868E'
        const tokenBuy = '0x6f2f89bd53f622619479e7805b2f54716f545d19'
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
        const data = await contract.populateTransaction.buyNFT(0, tokenBuy, { value: '1000000' })
        this.sendTransaction(data)
    }

    static async sendTransaction(signedTx) {
        const txHash = await this.provider.sendTransaction(signedTx)
        const receipt = await txHash.wait()
    }
}

export default Web3Services