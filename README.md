# [buildspace](https://buildspace.so/) Wave Portal 👋 
### Web3 App with Solidity + Ethereum Smart Contracts

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a solution to the [buildspace](https://buildspace.so/) challenge to build a <b>Web3 App with Solidity + Ethereum Smart Contracts</b>. [buildspace](https://buildspace.so/) is a platform to learn and build <b>Web3</b> projects alongside other devs.

This repo contains the <b>Solidity + Ethereum Smart Contracts</b> for my <b>Web3</b> app.  You can view the repo for front-end <b>React</b> code [here](https://github.com/Chanda-Abdul/waveportal-client).

I built this project so that I could learn some <b>Solidity</b>, write + deploy a <b>smart contract</b> to the <b>blockchain</b>, and build a <b>Web3 client</b> app that can <b>interact</b> with your a <b>smart contract</b>, and to basically get comfortable building an entire Web3 App. 

## The challenge

### Smart Contract should be able to:

- [x] <b>Deploy</b> your WavePortal <b>smart contract</b> to a local <b>Ethereum network</b>
- [x] <b>Connect to our wallet</b> and talks to our WaveContract
- [x] <b>Update WavePortal</b> to randomly send lucky users waving at you some Ethereum
- [x] <b>Update UI</b> + <b>deploy</b> to an <b>Ethereum testnet</b> so anyone on the internet can wave at you using their wallet

### Users should be able to:

- [x] <b>View</b> landing page and understand the purpose of this app
- [x] <b>Connect</b> their ethereum <b>wallet</b> using Metamask, with the Rinkeby Test Network
- [x] <b>Input a message</b> and click button to send a "wave" to the smart contract owner
- [x] Once the "wave" is sent, the "waver" is entered to <b>win a prize</b> where the winner is chosen at random
- [x] While the user is waiting for their transaction to be mined on the blockchain a <b>loading message</b> is displayed to the UI. Because of <b>blocktime</b> this message may be displayed for 15+ seconds
- [x] The <b>number of "wavers"</b> is displayed along with each wavers <b>address</b>, <b>time</b> that wave was sent, and a <b>message</b>.

## Screenshots

### Landing page and Connect Wallet button
![](https://github.com/Chanda-Abdul/waveportal-client/blob/main/screens/landing.png)
### Send message along with your wave
![](https://github.com/Chanda-Abdul/waveportal-client/blob/main/screens/sendwave.png)
### View loader while wave is being sent
![](https://github.com/Chanda-Abdul/waveportal-client/blob/main/screens/mining.png)
### View your wave, number of wavers, and data for each waver
![](https://github.com/Chanda-Abdul/waveportal-client/blob/main/screens/wavesent.png)
![](https://github.com/Chanda-Abdul/waveportal-client/blob/main/screens/allwaves.png)

## Links

- Link to deployed Site: [Wave Portal Web3 dApp](https://gifted-aryabhata-929956.netlify.app/)
- Link to Solidity Smart Contract: [Wave Portal Smart Contact Code](https://github.com/Chanda-Abdul/waveportal-client)

## My process

### Built with

- [Smart-Contract](https://github.com/Chanda-Abdul/waveportal-smart-contract)
    - [Solidity](https://docs.soliditylang.org/en/v0.8.12/)
        - [Ethereum](https://ethereum.org/en/)
        - [Hardhat](https://hardhat.org/)
    - [Metamask](https://metamask.io/)
    - [Rinkeby Test Net](https://www.rinkeby.io/)
        - [Rinkeby Faucet](https://www.rinkebyfaucet.com/)
        - [Etherscan](https://rinkeby.etherscan.io/)
    - [Blockchain](https://en.wikipedia.org/wiki/Blockchain)
- Front-end
    - [React](https://reactjs.org/) - JavaScript Framework
        - [Semantic UI React](https://react.semantic-ui.com/) Components
    - CSS Flexbox

## What I learned

This was a useful and rewarding project for me.  I became interested in Web3 and Solidity, and I knew that would be the most effect way to learn was by building a complete project.  I ran into ALOT of roadblocks in previously because Web3 and Solidity are fairly new technologies that are updated all the time, sometimes with breaking changes 😩. Because of this it has been extremely hard for me to find documentation and resources to use while building Solidity projects. 

This was my first successfully completed Web3 project. I really enjoyed that buildspace showed the step by step process of how to build a Web3 project and for providing a community that you can utilized to get help when you run into any blockers. 

One of the main tools that helped me complete this project was [Hardhat](https://hardhat.org/)🙌🏽, which allows you to deploy your contracts, run tests and debug Solidity code without dealing with live environments. 

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
``` -->



## Continued development

There are a few things that I would like to revist when I have the time.  The prize functionality is build into the smart contract, but I would like to add some feedback to the UI so that the user willl know that they entered the contest and alert them if they win.  I would also like to add UI feedback for any issues we may encouter, such as running out of gas, etc.


### To-Do's

- [ ] Add tests with Mocha
- [ ] Add `getCountsPerWaver()` to contract
- [ ] write README.md
## Useful resources

-  [Hardhat](https://hardhat.org/), an Ethereum development environment. Hardhat allows you to deploy your contracts, run tests and debug Solidity code without dealing with live environments. This really helped me understand how to build a smart contract from a JavaScript point of view.
- [Semantic UI React](https://react.semantic-ui.com/).  I used <b>Semantic UI Components</b> for the `<Input/>` box and the `<Table/>` that displays the waver's information.  I didn't want to spend a ton of time on these elements because the focus of this project was to build a fully functional smart contract. 

## Author

- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)

## Acknowledgments

[buildspace](https://buildspace.so/) is a great resource if you want to get started with Web3. Highly recommended 💯.
