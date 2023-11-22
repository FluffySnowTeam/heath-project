import { PropsWithChildren, useEffect, useRef } from 'react'
import * as S from './AddPostContent.styles'
import type { AddPostModalProps } from './AddPostContent.types'
import { useAtom } from 'jotai'
import { AddPostState } from '@/store/addPostModal.atoms'
import Image from 'next/image'

export const AddPostContent = ({ onClose }: PropsWithChildren<AddPostModalProps>) => {
  const [postData, setPostData] = useAtom(AddPostState)
  const inputRef = useRef<HTMLInputElement>(null)
  console.log(postData)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://211.201.26.10:8080/posts/1')
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       const data = await response.json()
  //       console.log('Fetched data:', data)
  //     } catch (error) {
  //       console.error('Fetch error:', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  const handleUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return
    }
    const reader = new FileReader()
    const file = e.target.files[0]

    reader.readAsDataURL(file)
    reader.onload = function (e: any) {
      const imageUrl = e.target.result
      setPostData((prev) => ({ ...prev, postImgUrls: [imageUrl] }))
    }
  }

  const submitPostData = async () => {
    const response = await fetch('http://211.201.26.10:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 나중에 삭제 가능
      },
      body: JSON.stringify(postData),
      credentials: 'include',
    })
    if (!response.ok) {
      console.error('Error sending post data')
    } else {
      const responseData = await response.json()
      console.log('post sent successfully', responseData)
    }
  }

  return (
    <div>
      <S.AddPostHead>
        <S.AddPostTitle>새글 쓰기</S.AddPostTitle>
        <div>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.SubmitButton onClick={submitPostData}>등록</S.SubmitButton>
        </div>
      </S.AddPostHead>
      <S.TitleInput
        onChange={(e) => {
          setPostData((prev) => ({ ...prev, title: e.target.value }))
        }}
        placeholder="제목을 입력해주세요"
      />
      <S.ContentTextarea
        onChange={(e) => {
          setPostData((prev) => ({ ...prev, content: e.target.value }))
        }}
        placeholder="내용을 입력해주세요"
      />
      <S.ImageSection>
        <input type="file" accept="image/*" ref={inputRef} style={{ display: 'none' }} onChange={handleUploadImage} />
        <S.AddImageIcon onClick={handleUploadButtonClick} />
        {postData.postImgUrls && (
          <S.ImageBox>
            <Image style={{ objectFit: 'contain' }} src={postData.postImgUrls[0]} alt="postImage" fill />
          </S.ImageBox>
        )}
      </S.ImageSection>
    </div>
  )
}
