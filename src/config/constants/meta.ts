import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SmexSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SmexSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://SmexSwap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SmexSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SmexSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SmexSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SmexSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SmexSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SmexSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SmexSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SmexSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SmexSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SmexSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SmexSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SmexSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SmexSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SmexSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SmexSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SmexSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SmexSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SmexSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SmexSwap Info & Analytics')}`,
        description: 'View statistics for SmexSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SmexSwap Info & Analytics')}`,
        description: 'View statistics for SmexSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SmexSwap Info & Analytics')}`,
        description: 'View statistics for SmexSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SmexSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SmexSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('SmexSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('SmexSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SmexSwap')}`,
      }
    default:
      return null
  }
}
