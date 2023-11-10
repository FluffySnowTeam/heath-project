'use client'
import Image, { StaticImageData } from 'next/image'
import * as S from './PostCard.styles'
import { useEffect, useState } from 'react'

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
  // 날짜를 상태로 관리하고, 컴포넌트가 마운트될 때 한 번만 설정합니다.
  const [dateString, setDateString] = useState('')

  useEffect(() => {
    // 이렇게 하면 클라이언트 사이드에서만 실행되며 서버 렌더링과의 충돌을 피할 수 있습니다.
    setDateString(post.created.toString())
  }, [post.created])
  return (
    <S.PostCardContainer>
      <div>
        <Image src={post?.image} alt="post_main_image" width={180} height={200} />
      </div>
      <div>
        <div>
          <div>{post.title}</div>
          <div>{post.content}</div>
        </div>
        <div>
          <Image src={post?.user?.profileImage} alt="user_pofile_image" width={80} />
          <div>{post.user.id}</div>
          <div>{dateString}</div>
        </div>
      </div>
    </S.PostCardContainer>
  )
}
