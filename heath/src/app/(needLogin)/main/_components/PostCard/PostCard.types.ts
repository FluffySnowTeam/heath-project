import { StaticImageData } from 'next/image'

export interface PostCardProps {
  post: {
    id: number
    image: StaticImageData
    title: string
    content: string
    created: Date
    user: {
      id: string
      profileImage: StaticImageData
    }
  }
}
