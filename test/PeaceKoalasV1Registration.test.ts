import { expect } from 'chai';
import { ethers } from 'hardhat';
import { BigNumber, Contract, ContractFactory, Signer } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('PeaceKoalasV1 Registration', async () => {
  let PeaceKoalasRegistrationFactory: ContractFactory;
  let PeaceKoalasRegistrationContract: Contract;

  let imxAddress: string;

  beforeEach(async () => {
    imxAddress = '0x0000000000000000000000000000000000054321';

    PeaceKoalasRegistrationFactory = await ethers.getContractFactory('PeaceKoalasV1Registration');
    PeaceKoalasRegistrationContract = await PeaceKoalasRegistrationFactory.deploy(
      imxAddress
    );
  });

  describe('deployment', async () => {
    it('goes live like there was no tomorrow', async () => {
      expect(await PeaceKoalasRegistrationContract.isRegistered(toBn(123))).to.eq(imxAddress);
    });
  });
});
