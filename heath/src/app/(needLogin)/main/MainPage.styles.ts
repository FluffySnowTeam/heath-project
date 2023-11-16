import { PlusCircleOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 50px 100px;
  background-color: white;
  border-radius: 40px;
  padding: 50px;
`

export const MainWrapper = styled.div`
  position: relative;
`
export const AddIconWrapper = styled(PlusCircleOutlined)`
  cursor: pointer;
  bottom: 40px;
  right: 40px;
  position: fixed;
  color: black;
  font-size: 48px;
  border-radius: 100%;
  transition: background-color 0.3s ease;
  :hover {
    background-color: grey;
  }
`
