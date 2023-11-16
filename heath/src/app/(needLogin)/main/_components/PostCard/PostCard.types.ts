import { StaticImageData } from 'next/image'

export interface PostCardProps {
  post: {
    id: string
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
