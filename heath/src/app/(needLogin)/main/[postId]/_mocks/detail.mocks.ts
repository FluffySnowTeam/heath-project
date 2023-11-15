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
