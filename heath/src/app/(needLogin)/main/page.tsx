'use client'
import { mainConfig } from '@/config/main.config'
import { PostListForm } from './_components'
import * as S from './MainPage.styles'

const MainPage = () => {
  return (
    <S.MainWrapper>
      <S.MainContainer>
        {mainConfig.map((config, index) => (
          <PostListForm key={index} config={config} />
        ))}
        <S.AddIconWrapper />
      </S.MainContainer>
    </S.MainWrapper>
  )
}

export default MainPage
