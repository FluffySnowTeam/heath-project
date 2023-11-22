import { atom } from 'jotai'

interface IAddPostState {
  title: string
  content: string
  postImgUrls: string[]
}

export const AddPostState = atom<IAddPostState>({
  title: '',
  content: '',
  postImgUrls: [],
})
