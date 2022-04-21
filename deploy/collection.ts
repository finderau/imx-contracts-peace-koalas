import { ethers, hardhatArguments } from "hardhat";
import { getIMXAddress, getEnv, printVerifyCommand } from "../lib/utils";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying Contract with the account:", deployer.address);
    console.log("Account Balance:", (await deployer.getBalance()).toString());

    if (!hardhatArguments.network) {
        throw new Error("please pass --network");
    }

    const owner = getEnv("CONTRACT_OWNER_ADDRESS");
    const name = getEnv("CONTRACT_NAME");
    const symbol = getEnv("CONTRACT_SYMBOL");
    const baseUrl = getEnv("CONTRACT_BASE_URL");

    const PeaceKoalas = await ethers.getContractFactory("PeaceKoalasV1");
    const imxAddress = getIMXAddress(hardhatArguments.network);

    const peaceKoalasInstance = await PeaceKoalas.deploy(owner, name, symbol, baseUrl, imxAddress);

    printVerifyCommand(hardhatArguments.network, peaceKoalasInstance.address, [owner, name, symbol, baseUrl, imxAddress]);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
