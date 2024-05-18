// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;
contract ImplementationV2 {
    
    uint256 public val;

    function add(uint256 _add) public {
        val += _add;
    }
}
