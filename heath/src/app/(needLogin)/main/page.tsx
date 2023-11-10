'use client'
import { mainConfig } from '@/config/main.config'
import { PostListForm } from './_components'
import * as S from './MainPage.styles'

const MainPage = () => {
  return (
    <>
      <S.MainContainer>
        {mainConfig.map((config, index) => (
          <PostListForm key={index} config={config} />
        ))}
      </S.MainContainer>
    </>
  )
}

export default MainPage
