import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: <Trans>Auto CAKE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 272,
    stakingToken: serializedTokens.smp,
    earningToken: serializedTokens.smex,
    contractAddress: {
      97: '',
      56: '0x7092e029E4ce660F9AC081BF6D8a339BE602398b',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '1.157',
    deployedBlockNumber: 16037944,
    version: 3,
  },
  {
    sousId: 270,
    stakingToken: serializedTokens.smex,
    earningToken: serializedTokens.smex,
    contractAddress: {
      97: '',
      56: '0xA581349F26dE887700045F9B7d148775d422fDA2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.4861',
    deployedBlockNumber: 15897370,
    version: 3,
  },
  {
    sousId: 269,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.smex,
    contractAddress: {
      97: '',
      56: '0xe76a31cF974BA5819ce86cB4667a4bf05174bC59',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '4.629',
    deployedBlockNumber: 15875611,
    version: 3,
  },
].filter((p) => !!p.contractAddress[CHAIN_ID])

export default pools
