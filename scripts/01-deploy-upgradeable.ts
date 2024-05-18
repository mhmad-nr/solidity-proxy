import { ethers, upgrades } from "hardhat";

async function main() {
  const implementationV1 = await ethers.getContractFactory("ImplementationV1");

  const box = await upgrades.deployProxy(implementationV1, [], {
    initializer: "add",
  });
  console.log(box);

  // await box.deployed();
}
main();
