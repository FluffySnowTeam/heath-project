'use client'
import { Button } from '@chakra-ui/react'
import googleImage from '/public/images/login_google.png'
import naverImage from '/public/images/login_naver.png'
import Image from 'next/image'
import * as S from './Buttons.styles'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export const Buttons = () => {
  const { data: session } = useSession()
  console.log(session?.accessToken)
  // useEffect(() => {
  //   if (session) {
  //     sendTokenToBackend()
  //     // handleLogout()
  //     // getUsertoken()
  //   }
  // }, [session])

  // const getUsertoken = async () => {
  //   const reponse = await fetch('http://211.201.26.10:8080/members/3', {
  //     method: 'GET',
  //   })
  //   const data = await reponse.json()
  //   console.log(data)
  // }

  const handleLogout = async () => {
    if (session) {
      const response = await fetch('http://211.201.26.10:8080/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 나중에 삭제 가능
          accessToken: `${session?.id_token}`,
        },
      })
      if (!response.ok) {
        // 에러 처리
        console.error('Error sending token to backend')
        return
      }

      if (response.headers.get('content-type')?.includes('application/json')) {
        const responseData = await response.json()
        console.log('Token sent successfully', responseData)
      } else {
        console.log('Logout successful, no JSON response')
      }
    }
  }

  const sendTokenToBackend = async () => {
    if (session) {
      const response = await fetch('http://211.201.26.10:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 나중에 삭제 가능
          accessToken: `${session?.id_token}`,
        },
        body: JSON.stringify({ token: session?.id_token }),
      })
      if (!response.ok) {
        // 에러 처리
        console.error('Error sending token to backend')
      } else {
        const responseData = await response.json()
        console.log('Token sent successfully', responseData)
      }
    }
  }

  const handleSignIn = async (provider: string) => {
    signIn(provider)
  }

  return (
    <S.ButtonsContainer>
      <Button
        onClick={() => {
          handleSignIn('google')
        }}
        width="220px"
        height="50px"
        borderRadius="40px"
        bg="main.blue"
        size="lg"
      >
        <Image src={googleImage} alt="google_image" width={150} />
      </Button>
      <Button
        onClick={() => {
          handleSignIn('naver')
        }}
        width="220px"
        height="50px"
        marginTop="10px"
        borderRadius="40px"
        bg="main.blue"
        size="lg"
      >
        <Image src={naverImage} alt="naver_image" width={150} />
      </Button>
    </S.ButtonsContainer>
  )
}
