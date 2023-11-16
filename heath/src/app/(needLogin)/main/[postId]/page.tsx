'use client'
import { Box, ButtonGroup, Button, Text, Image, Input } from '@chakra-ui/react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import * as S from './DetailPage.styles'
import { CommentLists } from './_components'
import { PostMockData } from './_mocks/detail.mocks'

const DetailPage = () => {
  const SettingPost = (
    <ButtonGroup display={'flex'} justifyContent={'end'}>
      <Button size="s" backgroundColor="white" color="#555555">
        수정
      </Button>
      <Button size="s" backgroundColor="white" color="#555555">
        삭제
      </Button>
    </ButtonGroup>
  ) // 본인 글일 때만 보이게끔 해야 함

  const PostHeader = (
    <>
      <Box display="flex" justifyContent={'space-between'} alignItems={'end'} mt="1">
        <Text fontSize="3xl" fontWeight={'bold'}>
          {PostMockData.title}
        </Text>
        <Text color="#888888">작성일자: {PostMockData.date} </Text>
      </Box>
      <S.Contour />
    </>
  )

  const PostContents = (
    <>
      <Image
        src={PostMockData.image}
        alt="content image"
        mt="6"
        borderRadius={'20'}
        width="100%"
        height="400px"
        alignSelf={'center'}
        objectFit={'cover'}
      />
      <Text mt="4">{PostMockData.content}</Text>
    </>
  )

  return (
    <S.Container>
      <S.DetailContainer>
        {SettingPost}
        {PostHeader}
        {PostContents}
        <S.GoodBtn>
          {PostMockData.isLiked ? (
            <HeartFilled style={{ color: 'red', fontSize: '48px' }} />
          ) : (
            <HeartOutlined style={{ fontSize: '48px' }} />
          )}
        </S.GoodBtn>
        <Text fontWeight={'bold'}>좋아요 {PostMockData.good}개</Text>
        <CommentLists />
      </S.DetailContainer>
    </S.Container>
  )
}

export default DetailPage
