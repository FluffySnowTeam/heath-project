'use client'
import { Box, ButtonGroup, Button, Text, Image, Input } from '@chakra-ui/react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import * as S from './DetailPage.styles'


const DetailPage = () => {
  const post = {
    title: '달이 예쁘네요.',
    date: '2023/10/29',
    author: '영민스님',
    content: `오늘 산책 했음
    너무 좋았음`,
    image:
      'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=3278&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    isLiked: false,
      good: 20,
  }

  const comments = [
    {
      id: 1,
      userProfileImage: '',
      userId: '산책스님',
      content: '너무 이쁘네요 어디인가요?',
      subComment: [
        {
          id: 10,
          userProfileImage: '',
          userId: '쪼',
          content: '안녕하세요 스님',
        },
      ],
    },
    {
      id: 2,
      userProfileImage: '',
      userId: '산책스님',
      content: '너무 이쁘네요 어디인가요?',
      subComment: [],
    },
  ]


  const good = <HeartOutlined style={{ fontSize: '48px' }} />
  const goodgood = <HeartFilled style={{ color: 'red', fontSize: '48px' }} />

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
          {post.title}
        </Text>
        <Text color="#888888">작성일자: {post.date} </Text>
      </Box>
      <S.Contour />
    </>
  )

  const PostContents = (
    <>
      <Image
        src={post.image}
        alt="content image"
        mt="6"
        borderRadius={'20'}
        width="100%"
        height="400px"
        alignSelf={'center'}
        objectFit={'cover'}
      />
      <Text mt="4">{post.content}</Text>
    </>
  )

  const PostGood = (
    <>
      <S.GoodBtn>{goodgood}</S.GoodBtn>
      <Text fontWeight={'bold'}>좋아요 {post.good}개</Text>
    </>
  )

  const Comments = (
    <>
      <Box display="flex" alignItems={'end'} mt="3">
        <Text fontSize="2xl" fontWeight="bold">
          Comments
        </Text>
        <Text size="sm" ml="1" fontWeight={'bold'}>
          (20)
        </Text>
      </Box>
      <S.Contour />
      <Box display="flex" mt="3">
        <Input borderRadius={'20'} mr="3" placeholder="내용을 입력해주세요." />
        <Button borderRadius={'15'}>댓글달기</Button>
      </Box>
    </>
  )

  return (
    <S.Container>
      <S.DetailContainer>
        {SettingPost}
        {PostHeader}
        {PostContents}
        {PostGood}
        {Comments}
      </S.DetailContainer>
    </S.Container>
  )
}

export default DetailPage
