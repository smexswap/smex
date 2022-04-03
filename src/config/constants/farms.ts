import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SMEX',
    lpAddresses: {
      97: '',
      56: '0x4FfBd1Db04955e309747608e662AddA304c338BC',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x4FfBd1Db04955e309747608e662AddA304c338BC',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'SMP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4FfBd1Db04955e309747608e662AddA304c338BC',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 517,
    lpSymbol: 'SMP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4FfBd1Db04955e309747608e662AddA304c338BC',
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
      56: '0x4FfBd1Db04955e309747608e662AddA304c338BC',
    },
    token: serializedTokens.rusd,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 450,
    lpSymbol: 'SMEX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4FfBd1Db04955e309747608e662AddA304c338BC',
    },
    token: serializedTokens.sfund,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 505,
    lpSymbol: 'CAKE-SMEX LP',
    lpAddresses: {
      97: '',
      56: '0x4FfBd1Db04955e309747608e662AddA304c338BC',
    },
    token: serializedTokens.fuse,
    quoteToken: serializedTokens.wbnb,
  },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
