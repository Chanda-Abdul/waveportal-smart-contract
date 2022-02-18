const main = async () => {
  // to deploy something to the blockchain, we need a wallet address
  const [_, randomPerson] = await hre.ethers.getSigners();

  // This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

  // create a local Ethereum network for us, but just for this contract
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther("0.001"),
  });

  // wait until contract is officially deployed to local blockchain
  // then the constructor runs once we actually deploy
  await waveContract.deployed();

  //  after deployment this will give us the address of the deployed contract.
  // This address is how we can actually find our contract on the blockchain.
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", _.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );
  /*
   * Let's try two waves now
   */
  const waveTxn = await waveContract.wave("This is wave #1");
  await waveTxn.wait();

  const waveTxn2 = await waveContract.wave("This is wave #2");
  await waveTxn2.wait();

  /*
   * Get Contract balance to see what happened!
   */

  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  //First,all the function to grab the # of total waves
  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());


  //Finally, grab the waveCount one more time to see if it changed.
  let allWaves = await waveContract.getTotalWaves();

  console.log(allWaves, "allWaves");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
