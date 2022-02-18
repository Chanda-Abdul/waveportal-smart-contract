async function main() {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  console.log(waveContractFactory)
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther("0.01"),
  });

  await waveContract.deployed();

  console.log(`WavePortal address: ${waveContract.address}`);
}

main()
  .then((r) => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
