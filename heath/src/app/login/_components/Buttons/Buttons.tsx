import { Button } from '@chakra-ui/react'
import googleImage from '/public/images/login_google.png'
import naverImage from '/public/images/login_naver.png'
import Image from 'next/image'
import * as S from './Buttons.styles'

export const Buttons = () => {
  return (
    <S.ButtonsContainer>
      <Button width="220px" height="50px" borderRadius="40px" bg="main.blue" size="lg">
        <Image src={googleImage} alt="google_image" width={150} />
      </Button>
      <Button width="220px" height="50px" marginTop="10px" borderRadius="40px" bg="main.blue" size="lg">
        <Image src={naverImage} alt="naver_image" width={150} />
      </Button>
    </S.ButtonsContainer>
  )
}
