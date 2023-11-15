'use client'
import { PostCard } from '../(needLogin)/main/_components'
import { mainLikedMockData } from '../(needLogin)/main/_mocks/main.mocks'
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

  const Certification = <S.CertificationTitle>내 운동 인증글 (11)</S.CertificationTitle>

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
        {Certification}
        <div>
          {mainLikedMockData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </S.MyPageContainer>
    </S.Container>
  )
}

export default MyPage
