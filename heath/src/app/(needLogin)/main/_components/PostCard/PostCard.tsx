'use client'
import Image, { StaticImageData } from 'next/image'
import * as S from './PostCard.styles'
import { formattedDateFunc } from '@/utils/formattedDate'

interface PostCardProps {
  post: {
    id: number
    image: StaticImageData
    title: string
    content: string
    created: Date
    user: {
      id: string
      profileImage: StaticImageData
    }
  }
}

export const PostCard = ({ post }: PostCardProps) => {
  const Content = (
    <S.ContentContainer>
      <S.ContentTitle>{post.title}</S.ContentTitle>
      <S.Content>{post.content}</S.Content>
    </S.ContentContainer>
  )

  const User = (
    <S.UserContainer>
      <S.UserInfoSection>
        <S.UserImage>
          <Image src={post?.user?.profileImage} style={{ objectFit: 'cover' }} alt="user_pofile_image" fill />
        </S.UserImage>
        <S.UserId>{post.user.id}</S.UserId>
      </S.UserInfoSection>
      <S.PostCreatedDate>
        {formattedDateFunc(post.created instanceof Date ? post.created : new Date(post.created))}
      </S.PostCreatedDate>
    </S.UserContainer>
  )

  return (
    <S.PostCardContainer>
      <S.PostCardImage>
        <Image src={post?.image} alt="post_main_image" width={300} />
      </S.PostCardImage>
      <S.ContentUserContainer>
        {Content}
        {User}
      </S.ContentUserContainer>
    </S.PostCardContainer>
  )
}
