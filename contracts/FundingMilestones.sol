// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract FundingMilestones {
    string public project = "CeloScan-Lite";
    address public owner;

    constructor() {
        owner = msg.sender;
    }
}
