import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
{
    label: t('Home'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: 'https://smexswap.com',
    showItemsOnMobile: false,
    items: [
      // {
      //   label: t('Swap'),
      //   href: '/swap',
      // },
      // {
      //   label: t('Liquidity'),
      //   href: '/liquidity',
      // },
    ],
  },
  {
    label: t('Exchange'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: true,
    items: [
      // {
      //   label: t('Swap'),
      //   href: '/swap',
      // },
      // {
      //   label: t('Liquidity'),
      //   href: '/liquidity',
      // },
    ],
  },
  {
    label: t('Liquidity'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/liquidity',
    showItemsOnMobile: true,
    items: [
      // {
      //   label: t('Swap'),
      //   href: '/swap',
      // },
      // {
      //   label: t('Liquidity'),
      //   href: '/liquidity',
      // },
    ],
  },
  {
    label: t('Pool'),
    href: '/pools',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    showItemsOnMobile: true,
    items: [
      // {
      //   label: t('Farms'),
      //   href: '/farms',
      // },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },
  {
    label: t('Farming'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      // {
      //   label: t('Farms'),
      //   href: '/farms',
      // },
      // {
      //   label: t('Pools'),
      //   href: '/pools',
      // },
    ],
  },
  {
    label: t('NFT Launchpad'),
    href: '/soon', //`${nftsBaseUrl}`,
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      {
        label: t('NFT Earn'),
        href: `#`,
      },
      {
        label: t('NFT Marketplace'),
        href: `#`,
      },
    ],
  },
]

export default config
