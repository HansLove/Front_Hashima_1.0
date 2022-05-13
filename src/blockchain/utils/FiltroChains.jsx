import { dameCurrentChain } from "../Blockchain"

export async function determinarChain(deployedNetwork,id){

    let array_binance_mainnet=[
        "0x66cafdD687b83663512bCfC99e36724d86b11C7e"//Hashima
        ,"0x3C8CdbD9cE47997ADBf95B2348b078d29f257B7D"//$HASHI(Staking)
        ,""//Auction
    ]
    

    let array_binance_testnet=[
        "0x99Dc4a0CF0823b329F75D21278B2941bAffe1Ed7"//Hashima
        ,"0xd53a321E41982A7725175E9eA1BaF7Ae9CA7C087"//$HASHI(Staking)
        ,"0x10794740dc4de95E9aB8887fae4A748F4242f05F"//Auction
        
    ]
    
    var winner=''
    let chainId=await dameCurrentChain()

    if(chainId=='0x539'){
        //Gananche fake blockchain
        winner=deployedNetwork.address
      }else if(chainId=='0x38'){
        //Binance smart chain
        winner=array_binance_mainnet[id]
      }else if(chainId=='0x1'){
        //Ethereum
        winner='0x66cafdD687b83663512bCfC99e36724d86b11C7e'

      }else if(chainId=='0x61'){
        //Binance testnet
        winner=array_binance_testnet[id]
      }
      return winner

}