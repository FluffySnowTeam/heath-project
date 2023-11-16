'use client'

import * as S from './MyPage.styles'
import { Goals, InfoModal, GoalModal } from './_components'

const MyPage = () => {
  const UserInfo = (
    <S.UserInfoContainer>
      <S.UserInfo>
        <S.UserImg />
        <S.UserTextContainer>
          <S.UserName>username</S.UserName>
          <S.UserMsg>상태메세지를 입력해주세요.</S.UserMsg>
        </S.UserTextContainer>
      </S.UserInfo>
      <InfoModal />
    </S.UserInfoContainer>
  )

  const Goal = (
    <S.GoalContainer>
      <S.GoalHeaderContainer>
        <S.GoalText>Your Goal!</S.GoalText>
        <GoalModal></GoalModal>
      </S.GoalHeaderContainer>
      <S.Contour />
      <Goals />
      <Goals />
      <Goals />
    </S.GoalContainer>
  )

  const Exercise = (
    <S.ExerciseContainer>
      <S.ExerciseTitle>이번 달 운동 현황</S.ExerciseTitle>
    </S.ExerciseContainer>
  )

  return (
    <S.Container>
      <S.MyPageContainer>
        <S.UserContainer>
          <S.UserLeftContainer>
            {UserInfo}
            {Exercise}
          </S.UserLeftContainer>
          {Goal}
        </S.UserContainer>
        {/* 이부분 에러나서 주석해놨습니다! 수정 부탁드려용 */}
        {/* <Certification /> */}
      </S.MyPageContainer>
    </S.Container>
  )
}

export default MyPage
