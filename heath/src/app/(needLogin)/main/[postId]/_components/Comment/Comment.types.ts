export interface CommentProps {
  comment: {
    id: number
    userProfileImage: string
    userId: string
    content: string
    subComment: {
      id: number
      userProfileImage: string
      userId: string
      content: string
    }[]
  }
}
