import { atom } from 'jotai'

interface IAddPostState {
  title: string
  content: string
  imageUrl: string
}

export const AddPostState = atom<IAddPostState>({
  title: '',
  content: '',
  imageUrl: '',
})
