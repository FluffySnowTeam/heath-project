'use client'
import { Box, ButtonGroup, Button, Text, Image, Input, Divider } from '@chakra-ui/react'
import { CommentsMockData } from '../../_mocks/detail.mocks'
import { Comment, ReplyComment } from '..'

export const CommentLists = () => {
  let NumberComments = CommentsMockData.length
  for (let i = 0; i < CommentsMockData.length; i++) {
    NumberComments += CommentsMockData[i].subComment.length
  }
  const CommentsHeader = (
    <>
      <Box display="flex" alignItems={'end'} mt="3">
        <Text fontSize="2xl" fontWeight="bold">
          Comments
        </Text>
        <Text size="sm" ml="1" fontWeight={'bold'}>
          ({NumberComments})
        </Text>
      </Box>
      <Divider colorScheme="gray" />
    </>
  )

  const RegisterComments = (
    <>
      <Box display="flex" mt="3" mb="2">
        <Input borderRadius={'20'} mr="3" placeholder="내용을 입력해주세요." />
        <Button borderRadius={'15'}>댓글달기</Button>
      </Box>
    </>
  )

  return (
    <>
      {CommentsHeader}
      {RegisterComments}
      {CommentsMockData.map((comment) => (
        <>
          <Comment key={comment.id} comment={comment} />
        </>
      ))}
    </>
  )
}
