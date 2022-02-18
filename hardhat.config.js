require('@nomiclabs/hardhat-waffle')

task("accounts", "prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "rinkeby",
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/ZyVJH8C-O8xYG57OrbMGGVs2OJmbRqcF",
      accounts: ["55727e154591d5d8ef49705f653edfaa5d4935a472126f09a8d10ac064048aa0"],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
