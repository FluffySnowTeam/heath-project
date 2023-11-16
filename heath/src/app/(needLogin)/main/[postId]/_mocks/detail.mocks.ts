import profileImage from '/public/images/testProfileImage.png'
export const CommentsMockData = [
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
      {
        id: 20,
        userProfileImage: '',
        userId: '쪼',
        content: '몇키로 빠지셨나용?',
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

export const PostMockData = {
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
