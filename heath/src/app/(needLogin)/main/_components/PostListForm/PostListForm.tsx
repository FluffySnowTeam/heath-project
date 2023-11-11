import { PostCard } from '..'
import { mainLikedMockData, mainMockData } from '../../_mocks/main.mocks'
import { PostListFormProps } from './PostListForm.types'
import * as S from './PostListFrom.styles'

export const PostListForm = ({ config }: PostListFormProps) => {
  const isMainPostList = config.subtitle === '실시간 운동 인증글'

  const mainPostList = (
    <S.PostListFormContainer>
      {mainMockData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </S.PostListFormContainer>
  )

  const likePostList = (
    <S.PostListFormContainer>
      {mainLikedMockData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </S.PostListFormContainer>
  )

  return (
    <div>
      <S.PostListTitle>{config.subtitle}</S.PostListTitle>
      {isMainPostList ? mainPostList : likePostList}
    </div>
  )
}
