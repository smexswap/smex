import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Page from 'components/Layout/Page'
import { Heading, Flex, Image, Text } from '@pancakeswap/uikit'
import LogoRound from "../../../packages/uikit/src/components/Svg/Icons/LogoRound";
import styles from './styles.module.css'


const ComingSoon: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()


  return (
    <Page>
      {/*<Flex justifyContent="center" verticalAlign="middle" flexDirection={['column', null, null, 'row']}>*/}
      <div className={ styles.row}>
        <h1 className={styles.heading}>How to invite friends</h1>
        {/*<img src="Inviter.svg" />*/}
      </div>
      <div className={styles.row}>
      <div className={ styles.collg4 }>
        <div className={styles.number}>
          1
        </div>
        {/*<img src="getReferralLink.png" className={styles.imgLink}/>*/}
        <div className={styles.padd32}>
          <span className={styles.referral}>Get a referral link</span>
          <span className={styles.connect}>Connect a wallet and generate your referral link in the Referral section.</span>
        </div>
      </div>
      <div className={ styles.collg4 }>
        <div className={styles.number}>
          2
        </div>
        {/*<img src="InviteFriends.png" className={styles.imgLink}/>*/}
        <div className={styles.padd32}>
          <span className={styles.referral}>Get a referral link</span>
          <span className={styles.connect}>Connect a wallet and generate your referral link in the Referral section.</span>
        </div>
      </div>
      <div className={ styles.collg4 }>
        <div className={styles.number}>
          3
        </div>
        {/*<img src="EarnCrypto.png" className={styles.imgLink}/>*/}
        <div className={styles.padd32}>
          <span className={styles.referral}>Get a referral link</span>
          <span className={styles.connect}>Connect a wallet and generate your referral link in the Referral section.</span>
        </div>
      </div>
      </div>
    </Page>
  )
}

export default ComingSoon
