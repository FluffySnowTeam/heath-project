import { PlusSquareOutlined } from '@ant-design/icons'
import { Button, Textarea } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const AddPostHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 15px;
`

export const AddPostTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
`

export const SubmitButton = styled(Button)`
  margin-left: 10px;
  border-radius: 20px;
  font-size: 14px;
  width: 80px;
  height: 35px;
  background-color: black;
  color: white;
  :hover {
    background-color: #bdcbeb;
    color: black;
  }
`

export const CancelButton = styled(Button)`
  margin-left: 10px;
  border-radius: 20px;
  font-size: 14px;
  width: 80px;
  height: 35px;
  background-color: white;
  color: black;
  border: 1px solid black;
  :hover {
    background-color: #bdcbeb;
    border: none;
    color: black;
  }
`

export const TitleInput = styled.input`
  border-bottom: 1px solid #555555;
  width: 100%;
  margin-bottom: 20px;
`

export const ContentTextarea = styled(Textarea)`
  height: 300px;
  margin-bottom: 20px;
`

export const ImageSection = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: start;
  align-items: center;
`

export const AddImageIcon = styled(PlusSquareOutlined)`
  font-size: 120px;
  color: #becbeb;
  cursor: pointer;
  transition: color 0.3s ease;
  :hover {
    color: #999999;
  }
`

export const ImageBox = styled.div`
  position: relative;
  width: 160px;
  height: 200px;
  border-radius: 20px;
  margin-left: 20px;
`
