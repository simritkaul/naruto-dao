import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

// Importing and configuring our dotenv file
import dotenv from "dotenv";
dotenv.config();

// Checks to make sure our env is working
if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
    console.log("🛑 Private key not found!");
}

if(!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === "") {
    console.log("🛑 Alchemy API Url not found!");
}

if(!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
    console.log("🛑 Wallet address not found!");
}

// RPC URL, we'll use the alchemy api url
const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_API_URL);

// Wallet private key
const wallet = new ethers.Wallet(process.env.WALLET_ADDRESS, provider);

const sdk = new ThirdwebSDK(wallet);

(async () => {
    try {
        const address = await sdk.getSigner().getAddress();
        console.log("SDK initialised by the address: ", address);    
    } 
    catch (e) {
        console.error("Failed to get apps from the sdk", e);
        process.exit(1);
    }
})();

// Exporting the initialised thirdweb sdk so that can use in other scripts
export default sdk;