import { Checkbox, Text } from '@chakra-ui/react'
import * as S from './Goals.styles'

export const Goals = () => {
  return (
    <S.GoalsContainer>
      <S.GoalsLeftContainer>
        <Checkbox size="lg" colorScheme="none" iconColor="black" spacing="1rem" borderColor="black">
          <Text lineHeight="150%">목표 2 달성하기 최대 글자수는 몇자까지??</Text>
        </Checkbox>
      </S.GoalsLeftContainer>
      <S.GoalsRightContainer>
        <S.GoalsDeleteBtn>삭제</S.GoalsDeleteBtn>
      </S.GoalsRightContainer>
    </S.GoalsContainer>
  )
}
