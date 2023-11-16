'use client'
import Image from 'next/image'
import logo from '../../../public/images/main_logo.png'
import smile from '../../../public/images/smile_icon.png'
import * as S from './Header.styles'
import { usePathname, useRouter } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  const router = useRouter()

  const handleMoveToPage = (path: string) => {
    if (path === 'main') router.push(`/main`)
    else router.push(`/mypage`)
  }

  return (
    <S.HeaderContainer>
      <S.HeaderSection>
        <S.HeaderIcon
          onClick={() => {
            handleMoveToPage('main')
          }}
        >
          <Image src={logo} width={120} alt="main_logo" />
        </S.HeaderIcon>
        {!isLoginPage && (
          <S.HeaderIcon
            onClick={() => {
              handleMoveToPage('mypage')
            }}
          >
            <Image src={smile} width={40} alt="main_logo" />
          </S.HeaderIcon>
        )}
      </S.HeaderSection>
      <S.HeaderBorder />
    </S.HeaderContainer>
  )
}
