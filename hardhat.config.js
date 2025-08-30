require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.19",
  networks: {
    celo: {
      url: "https://forno.celo.org",
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  }
};
