import styled from '@emotion/styled'

export const PostCardContainer = styled.div`
  background-color: #eeeeee;
  width: 380px;
  display: flex;
  padding: 20px;
  border-radius: 40px;
`

export const PostCardImage = styled.div`
  img {
    border-radius: 30px;
  }
`

export const ContentUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

export const ContentContainer = styled.div`
  width: 150px;
`

export const ContentTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`

export const Content = styled.div`
  font-size: 14px;
`

export const UserContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`

export const UserImage = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  img {
    border-radius: 100%;
  }
`

export const UserInfoSection = styled.div`
  display: flex;
  align-items: center;
`

export const UserId = styled.div`
  margin-left: 10px;
  font-weight: bold;
`

export const PostCreatedDate = styled.div`
  color: #999999;
  font-size: 12px;
  font-weight: 500;
  margin-top: 5px;
`
