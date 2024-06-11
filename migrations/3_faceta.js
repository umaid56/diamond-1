const FacetA = artifacts.require('FacetA')

module.exports = function (deployer, network, accounts) {
deployer.deploy(FacetA)

}
