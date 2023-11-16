'use client'
import { ReplyComment } from '..'
import { CommentsMockData } from '../../_mocks/detail.mocks'
import { CommentProps } from './Comment.types'
import { Box, Image, Text, Button } from '@chakra-ui/react'

export const Comment = ({ comment }: CommentProps) => {
  const CommentLeftSection = (
    <Box display={'flex'}>
      <Image src={comment.userProfileImage} />
      <Text ml="3" fontWeight={'bold'}>
        {comment.userId}
      </Text>
      <Text ml="3">{comment.content}</Text>
    </Box>
  )

  return (
    <>
      <Box display={'flex'} mt="3" justifyContent={'space-between'} alignItems={'center'}>
        {CommentLeftSection}
        <Button backgroundColor="white" size="sm">
          답글달기
        </Button>
      </Box>
      {comment.subComment.map((reply) => (
        <ReplyComment key={reply.id} comment={reply} />
      ))}
    </>
  )
}
