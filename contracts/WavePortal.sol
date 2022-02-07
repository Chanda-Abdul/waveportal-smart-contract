//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves++;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    //store the address of the sender in an array
    struct Wavers {
        id address;
    }

    Wavers[] public wavers;

    function addWavers() public view {
        wavers.push(Wavers(msg.sender));
    }
    function getWavers() public view returns (address[]) {
        return  wavers;
    }

    //store a map of addresses and wave counts so you keep track of who's waving at you the most
    mapping(uint256 => address) public WaverToCount;
    mapping(address => uint256) countsPerWaver;

    function getZombiesByOwner(address _owner) external view returns(uint[]) {
    uint[] memory result = new uint[](WaverToCount[_waver]);
    uint counter = 0;
    for (uint i = 0; i < zombies.length; i++) {
      if (zombieToOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }


    function getCountsPerWaver(){

    }
}
