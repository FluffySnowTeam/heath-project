'use client'
import Image from 'next/image'
import logo from '../../../public/images/main_logo.png'
import smile from '../../../public/images/smile_icon.png'
import * as S from './Header.styles'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  return (
    <S.HeaderContainer>
      <S.HeaderSection>
        <div>
          <Image src={logo} width={120} alt="main_logo" />
        </div>
        {!isLoginPage && (
          <div>
            <Image src={smile} width={40} alt="main_logo" />
          </div>
        )}
      </S.HeaderSection>
      <S.HeaderBorder />
    </S.HeaderContainer>
  )
}
