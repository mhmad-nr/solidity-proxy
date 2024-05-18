import { ethers, upgrades } from "hardhat";

const PROXY = "0x7f60e5AdcC82a059343D7D47E432A8C01Ab548dF";

async function main() {
  const implementationV2 = await ethers.getContractFactory("ImplementationV2");

  const boxV2 = await upgrades.upgradeProxy(PROXY, implementationV2);
  console.log(boxV2);

  // await box.deployed();
}
main();
