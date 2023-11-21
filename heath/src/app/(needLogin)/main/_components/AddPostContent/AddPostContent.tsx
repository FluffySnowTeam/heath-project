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
        accessToken:
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IjViMzcwNjk2MGUzZTYwMDI0YTI2NTVlNzhjZmE2M2Y4N2M5N2QzMDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4MTk0MjU5NTI5ODAtcW42djN1czc5MHRiN2thZjdmYjlzbmFpN3A1ZHF0ZXUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4MTk0MjU5NTI5ODAtcW42djN1czc5MHRiN2thZjdmYjlzbmFpN3A1ZHF0ZXUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTcxMzc2MjM4MDc3NDM3OTAwOTciLCJlbWFpbCI6Inppdml2bGVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiIySzlqUDFUTndObWdfeUFvX2htN3BBIiwibmFtZSI6IuyngOyEseqyvSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMd0wtV3hSLXNsbVNzR3R2WVRVeEdZVXRuSlFPX3ZFc3RSV0NnX1FLdktSc2s9czk2LWMiLCJnaXZlbl9uYW1lIjoi7ISx6rK9IiwiZmFtaWx5X25hbWUiOiLsp4AiLCJsb2NhbGUiOiJrbyIsImlhdCI6MTcwMDU1MTQ5OSwiZXhwIjoxNzAwNTU1MDk5fQ.gcHt-vUPTmWM3IWOikb7ZR6dOb8JsSYjWyax_7JTIqTemT3OrfKP7ETbiI9lpz1a5Rf4xUhQH05eVXwiTglrJW87XRPXbBChePg4xpwhla-v88Y-cIhGDcM0O34GIiOAAhiwKj57a-WmYb-oBbD0vn2HAP5SpZAQPC3aftX6bf6iHAUjp08UXE7XVLItCF3Iw3-jll4oNuFpEEqE0Li3RSLdlbyfqq4EXlGE1y8627SfZNavwdJni0kP8apAOU2YoOaKP5Ga_coh52AU4n0x2vbCdvzhI6twU3kmDKGWWjLwS8mTt495jLJm1ByhPxh48-iupt746aqbrEuC_DS22g',
      },
      body: JSON.stringify(postData),
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
