import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract, ContractFactory, Signer } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

describe('PeaceKoalasV1', async () => {
  let PeaceKoalasFactory: ContractFactory;
  let PeaceKoalasContract: Contract;

  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: Array<SignerWithAddress>;

  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const { ownerAddress,
      tokenName,
      tokenSymbol,
      tokenMetadataBaseUrl,
      imxAddress } = {
      ownerAddress: owner.address,
      tokenName: 'Peace Koalas V1',
      tokenSymbol: 'PCKLS',
      tokenMetadataBaseUrl: 'https://example.com/metadata/',
      imxAddress: addr1.address,
    };

    PeaceKoalasFactory = await ethers.getContractFactory('PeaceKoalasV1');
    PeaceKoalasContract = await PeaceKoalasFactory.deploy(
      ownerAddress,
      tokenName,
      tokenSymbol,
      tokenMetadataBaseUrl,
      imxAddress
    );
  });

  describe('deployment', async () => {
    it('goes live like there was no tomorrow', async () => {
      expect(await PeaceKoalasContract.imx()).to.eq(addr1.address);
    });
  });
});
