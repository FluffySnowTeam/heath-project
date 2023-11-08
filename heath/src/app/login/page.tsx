'use client'
import Image from 'next/image'
import mainImage from '../../../public/images/main_image.png'
import mainLogo from '../../../public/images/main_logo.png'
import * as S from './LoginPage.styles'
import { Buttons } from './_components'

const LoginPage = () => {
  return (
    <S.LoginContainer>
      <S.LoginFormLogo>
        <Image src={mainImage} width={350} alt="main_image" />
      </S.LoginFormLogo>
      <S.LoginForm>
        <Image src={mainLogo} width={150} alt="main_logo" />
        <S.LoginFormTitle>여러분들의 운동기록을 자랑해보세요 !</S.LoginFormTitle>
        <Buttons />
      </S.LoginForm>
    </S.LoginContainer>
  )
}

export default LoginPage
