//deployment address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266


// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const FCTToken = await hre.ethers.getContractFactory("FCTToken");
  const fctToken = await FCTToken.deploy("FCTToken", "TKN");

  await fctToken.deployed();

  console.log("Token deployed to:", fctToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
