import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Page from 'components/Layout/Page'
import { Heading, Flex, Image, Text } from '@pancakeswap/uikit'
import LogoRound from "../../../packages/uikit/src/components/Svg/Icons/LogoRound";



const ComingSoon: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const divStyle = {
    display: 'flex',
    verticalAlign: 'center'
  };


  return (
    <Page style={divStyle}>
      {/*<Flex justifyContent="center" verticalAlign="middle" flexDirection={['column', null, null, 'row']}>*/}
        <Flex justifyContent="center" alignItems="center" width="100%" flexDirection={['column', null, null, 'column']}>
          <div>
            <LogoRound width="100"/>
            {/*<img src="logo.png" width="240px" />*/}
          </div>
          <div>
            <Heading as="h1" scale="xxl" color="textSubtle" mb="24px">
              {('Coming Soon')}
            </Heading>
          </div>

        </Flex>
    </Page>
  )
}

export default ComingSoon
