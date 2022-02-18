//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves;

    constructor() payable {
        console.log("I AM SMART CONTRACT. POG.");
    }

    function wave(string memory _message) public {
        totalWaves++;
        console.log("%s has waved with messsge %s", msg.sender, _message);
        /*
         * This is where I actually store the wave data in the array.
         */
        waves.push(Wave(msg.sender, _message, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);
    }

    /*
     * I added a function getAllWaves which will return the struct array, waves, to us.
     * This will make it easy to retrieve the waves from our website!
     */

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        //print contract value
        console.log("we have %d total waves!", totalWaves);
        return totalWaves;
    }

    //store a map of addresses and wave counts so you keep track of who's waving at you the most
    //     mapping(uint256 => address) public WaverToCount;
    //     mapping(address => uint256) countsPerWaver;

    //     function getZombiesByOwner(address _owner) external view returns(uint[]) {
    //     uint[] memory result = new uint[](WaverToCount[_waver]);
    //     uint counter = 0;
    //     for (uint i = 0; i < zombies.length; i++) {
    //       if (zombieToOwner[i] == _owner) {
    //         result[counter] = i;
    //         counter++;
    //       }
    //     }
    //     return result;
    //   }

    // function getCountsPerWaver(){

    // }
}
