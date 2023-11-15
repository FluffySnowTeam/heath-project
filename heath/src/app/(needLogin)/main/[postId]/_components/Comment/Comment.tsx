'use client'
import { ReplyComment } from '..'
import { CommentsMockData } from '../../_mocks/detail.mocks'
import { CommentProps } from './Comment.types'
import { Box, Image, Text, Button } from '@chakra-ui/react'

export const Comment = ({ comment }: CommentProps) => {
  const userProfileImage = <Image src={comment.userProfileImage} />
  const userId = (
    <Text ml="3" fontWeight={'bold'}>
      {comment.userId}
    </Text>
  )
  const content = <Text ml="3">{comment.content}</Text>
  const CommentLeftSection = (
    <Box display={'flex'}>
      {userProfileImage}
      {userId}
      {content}
    </Box>
  )

  const CommentRightSection = (
    <Button backgroundColor="white" size="sm">
      답글달기
    </Button>
  )

  return (
    <>
      <Box display={'flex'} mt="3" justifyContent={'space-between'} alignItems={'center'}>
        {CommentLeftSection}
        {CommentRightSection}
      </Box>
      {comment.subComment.map((reply) => (
        <ReplyComment key={reply.id} comment={reply} />
      ))}
    </>
  )
}
