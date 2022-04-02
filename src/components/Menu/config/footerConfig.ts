import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('SmexSwap Token'),
        href: 'https://bscscan.com/address/0x4FfBd1Db04955e309747608e662AddA304c338BC',
      },
      {
        label: t('Analytics'),
        href: '#',
      },
      {
        label: t('Docs'),
        href: '#',
      },
      {
        label: t('Apply For Pools'),
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSeX_B0roEEACxdQBLL8x4AEhlH9kxKHBvsHu39NBITAU7wRoQ/viewform',
      },
      {
        label: t('Apply For Farms'),
        href: 'https://docs.google.com/forms/d/e/1FAIpQLScV0osv4yAl3cVZnf5b_uiIxae-CGlw6pmRJ2Z_Pgv15YKxJQ/viewform',
      },
    ],
  },
]
