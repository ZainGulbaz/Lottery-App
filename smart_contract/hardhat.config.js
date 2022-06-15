require("@nomiclabs/hardhat-waffle");
 
module.exports={
  solidity:'0.8.0',
  networks:{
    rinkeby:{
      url:`https://eth-rinkeby.alchemyapi.io/v2/wFEGqo6xrcUwMMpT8QGT8B4hHMyaS5O7`,
      accounts:["8c54bd90d05c1a42d8441ab564a87023d565856346456166c9c40b576899a743"]
    }
  }
}
