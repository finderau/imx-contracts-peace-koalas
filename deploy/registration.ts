import { ethers, hardhatArguments, run } from "hardhat";
import { getIMXAddress, printVerifyCommand } from "../lib/utils";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying Contracts with the account:", deployer.address);
    console.log("Account Balance:", (await deployer.getBalance()).toString());

    if (!hardhatArguments.network) {
        throw new Error("please pass --network");
    }

    const Registration = await ethers.getContractFactory("Registration");
    const imx_address = getIMXAddress(hardhatArguments.network);
    const registrationInstance = await Registration.deploy(imx_address);

    console.log("Deployed Contract Address:", registrationInstance.address);

    printVerifyCommand(hardhatArguments.network, registrationInstance.address, [imx_address]);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
