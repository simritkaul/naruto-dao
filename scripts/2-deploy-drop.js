import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            // Collection's name
            name: "NarutoDAO Membership",
            // Description of the collection
            description: "A DAO for Naruto fans.",
            // The image held in the NFT
            image: readFileSync("scripts/assets/naruto.png"),
            // We need to pass the address of the receiver of proceeds from the sales of NFTs in the contract.
            // We don't want to charge people for the drop so we'll pass the 0x0 address
            // We can set it to our address if we want to charge people for the drop
            primary_sale_recipient: AddressZero,
        });
        
        // this initialisation returns the address of our contract
        // We will use this to initialise the contract on the thirdweb sdk
        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        // Now we can get the metadata of our contract
        const metadata = await editionDrop.metadata.get();

        console.log("✅ Successfully deployed editionDrop contract at address: ", editionDropAddress);

        console.log("✅ editionDrop metadata: ", metadata);
    } 
    catch (error) {
        console.log("🛑 Failed to deploy editionDrop contract", error)
    }
})();