import { PostCard } from '@/app/(needLogin)/main/_components'
import { mainLikedMockData } from '@/app/(needLogin)/main/_mocks/main.mocks'
import { Grid, GridItem, Text } from '@chakra-ui/react'

export const Certification = () => {
  const NumberPostings = mainLikedMockData.length
  const Header = (
    <Text fontWeight={'bold'} color="#456783" fontSize={'20px'} mt="20px">
      내 운동 인증글 ({NumberPostings})
    </Text>
  )

  return (
    <>
      {Header}
      <Grid templateColumns={'repeat(3, 1fr)'} mt="3">
        {mainLikedMockData.map((post) => (
          <GridItem w="100%">
            <PostCard key={post.id} post={post} />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
