import * as S from './InfoModal.styles'
import { EditIcon, CloseIcon, SettingsIcon } from '@chakra-ui/icons'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  ButtonGroup,
  useDisclosure,
  IconButton,
  Image,
  Box,
  Icon,
} from '@chakra-ui/react'

export const InfoModal = () => {
  const User = {
    userImg: 'https://bit.ly/dan-abramov',
    userName: '산책스님',
    userMsg: '저는 산책을 좋아합니다.',
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const secession = (
    <Button color="#B6B6B6" width="90px" backgroundColor="white" height={'1.5rem'} size="xs" alignSelf={'end'}>
      회원 탈퇴하기
    </Button>
  )
  const profileImg = (
    <>
      <Image borderRadius="full" boxSize="150px" src={User.userImg} alt="User profile image" />
      <ButtonGroup display="flex" spacing={1} marginTop="1">
        <Button width="60px" backgroundColor="white" height={'1.5rem'} size="sm">
          수정 <EditIcon ml="1.5" />
        </Button>
        <Button width="60px" backgroundColor="white" height={'1.5rem'} size="sm">
          삭제 <CloseIcon ml="1.5" />
        </Button>
      </ButtonGroup>
    </>
  )

  const profileInfo = (
    <>
      <Box display="flex" alignItems={'center'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} mt="5">
          {User.userName}
        </Text>
        <IconButton aria-label="edit name" icon={<EditIcon />} size="xs" backgroundColor={'white'} />
      </Box>
      <Box display="flex">
        <Text>{User.userMsg}</Text>
        <IconButton aria-label="edit mssage" icon={<EditIcon />} size="xs" backgroundColor={'white'} />
      </Box>
    </>
  )

  const footer = (
    <ButtonGroup display="flex" spacing={3} marginTop="10">
      <Button backgroundColor="black" color="white" width="100px">
        취소
      </Button>
      <Button backgroundColor="#BECBEB" width="100px">
        변경사항 저장
      </Button>
    </ButtonGroup>
  )

  const content = (
    <S.Content>
      {secession}
      {profileImg}
      {profileInfo}
      {footer}
    </S.Content>
  )
  return (
    <>
      <IconButton
        aria-label="Setting info"
        icon={<SettingsIcon />}
        onClick={onOpen}
        isRound={true}
        colorScheme="whiteAlpha"
        color="black"
        size="lg"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl" fontWeight={'bold'}>
            내 정보 수정
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
