import { PropsWithChildren } from 'react'
import * as S from './AddPostContent.styles'

interface AddPostModalProps {
  onClose: () => void
}

export const AddPostContent = ({ onClose }: PropsWithChildren<AddPostModalProps>) => {
  return (
    <div>
      <S.AddPostHead>
        <S.AddPostTitle>새글 쓰기</S.AddPostTitle>
        <div>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.SubmitButton>등록</S.SubmitButton>
        </div>
      </S.AddPostHead>
      <S.TitleInput placeholder="제목을 입력해주세요" />
      <S.ContentTextarea placeholder="내용을 입력해주세요" />
      <S.ImageSection>
        <S.AddImageIcon />
        <div>이미지 보여질부분</div>
      </S.ImageSection>
    </div>
  )
}
