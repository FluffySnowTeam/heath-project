'use client'
import { mainConfig } from '@/config/main.config'
import { AddPostModal, PostListForm } from './_components'
import * as S from './MainPage.styles'
import { useDisclosure } from '@chakra-ui/react'

const MainPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <S.MainWrapper>
      <AddPostModal isOpen={isOpen} onClose={onClose} />
      <S.MainContainer>
        {mainConfig.map((config, index) => (
          <PostListForm key={index} config={config} />
        ))}
        <S.AddIconWrapper onClick={onOpen} />
      </S.MainContainer>
    </S.MainWrapper>
  )
}

export default MainPage
