const main = async () => {
  // to deploy something to the blockchain, we need a wallet address
  const [owner, randomPerson] = await hre.ethers.getSigners();
  
  // This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");

  // create a local Ethereum network for us, but just for this contract
  const waveContract = await waveContractFactory.deploy();

  // wait until contract is officially deployed to local blockchain
  // then the constructor runs once we actually deploy
  await waveContract.deployed();

  //  after deployment this will give us the address of the deployed contract.
  // This address is how we can actually find our contract on the blockchain.
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  //First,all the function to grab the # of total waves
  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  //Then, do the wave
  let waveTxn = await waveContract.wave();
  await waveTxn.wait();
  //Finally, I grab the waveCount one more time to see if it changed.
  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
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
