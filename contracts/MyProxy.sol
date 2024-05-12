// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/Proxy.sol";

contract MyProxy is Proxy {
    uint256 public val;

    function _implementation()
        internal
        view
        override
        returns (address implementation)
    {
        assembly {
            implementation := sload(0)
        }
    }
}
