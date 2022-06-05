import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../Components/Button";
import {
  Container,
  Banner,
  BlurBackground,
  InfoContainer,
  LeftBanner,
  BigText,
  SmallText,
  RightBanner,
  NftContainer,
  ImageWrapper,
  Buttons,
  SmallBanner
} from './style'

function Homepage() {
  const nftImg1 = 'https://coin68.com/wp-content/uploads/2021/12/adidas-BAYC.jpg'
  const nftImg2 = 'https://coin68.com/wp-content/uploads/2021/12/adidas-BAYC.jpg'
  const appSetting = useSelector(state => state.APP_SETTING)

  return (
    <Container className={appSetting?.darkMode ? 'dark' : ''}>
      <Banner className={appSetting?.darkMode ? 'dark' : ''}>
        <BlurBackground image={nftImg1} />
        <InfoContainer>
          <LeftBanner>
            <BigText>
              Discover, collect, and sell extraordinary NFTs
            </BigText>
            <SmallText>
              OpenSea is the world's first and largest NFT marketplace
            </SmallText>
            <Buttons>
              <MyButton width={'170px'} height={'50px'} type='primary'>Explore</MyButton>
              <MyButton width={'170px'} height={'50px'} type='secondary'>Create</MyButton>
            </Buttons>
          </LeftBanner>
          <RightBanner>
            <NftContainer>
              <ImageWrapper image={nftImg2} />
            </NftContainer>
          </RightBanner>
        </InfoContainer>
      </Banner>
      <SmallBanner image='https://static.opensea.io/solana/home-banner.png'>
        Solana is in beta on OpenSea
        <MyButton width={'110px'} height={'50px'} type='primary'>Explore</MyButton>
      </SmallBanner>
    </Container>
  )
}

export default Homepage
