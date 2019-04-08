var BenevoleConnect = artifacts.require("../contracts/BenevoleConnect.sol");

module.exports = function(deployer) {
  deployer.deploy(BenevoleConnect);
};

