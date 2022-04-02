import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'SMP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 517,
    lpSymbol: 'SMP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1eDe821DAADe714edADe648F525AdA0C5fE4Ee3A',
    },
    token: serializedTokens.tem,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 448,
    lpSymbol: 'SMEX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x59FaC9e98479fc9979aE2a0C7422Af50bCBB9B26',
    },
    token: serializedTokens.rusd,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 450,
    lpSymbol: 'SMEX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x74fA517715C4ec65EF01d55ad5335f90dce7CC87',
    },
    token: serializedTokens.sfund,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 505,
    lpSymbol: 'CAKE-SMEX LP',
    lpAddresses: {
      97: '',
      56: '0x6483F166b9E4310A165a55FEa04F867499aded06',
    },
    token: serializedTokens.fuse,
    quoteToken: serializedTokens.wbnb,
  },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
