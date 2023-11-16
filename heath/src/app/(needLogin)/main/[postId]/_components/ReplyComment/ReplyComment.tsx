'use client'
import { MinusOutlined } from '@ant-design/icons'
import { CommentsMockData } from '../../_mocks/detail.mocks'
import { CommentProps } from './ReplyComment.types'
import { Box, Image, Text, Button } from '@chakra-ui/react'

export const ReplyComment = ({ comment }: CommentProps) => {
  return (
    <Box display={'flex'} ml="3">
      <MinusOutlined />
      <Image src={comment.userProfileImage} />
      <Text ml="3" fontWeight={'bold'}>
        {comment.userId}
      </Text>
      <Text ml="3">{comment.content}</Text>
    </Box>
  )
}
