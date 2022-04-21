// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@imtbl/imx-contracts/contracts/registration/Registration.sol";

contract PeaceKoalasV1Registration is Registration {
    constructor(IMX _imx) Registration(imx) {}
}
