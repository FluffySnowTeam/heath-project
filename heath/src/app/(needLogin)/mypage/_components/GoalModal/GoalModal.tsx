import * as S from './GoalModal.styles'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Input,
  Button,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/react'

export const GoalModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const content = (
    <S.Content>
      <Text fontSize="2xl" as="b">
        새 목표 등록하기
      </Text>
      <Input placeholder="목표를 입력해주세요." variant="flushed" borderColor={'black'} marginTop="10" />
      <ButtonGroup display="flex" spacing={3} marginTop="10">
        <Button backgroundColor="black" color="white" width="100px">
          취소
        </Button>
        <Button backgroundColor="#BECBEB" width="100px">
          저장
        </Button>
      </ButtonGroup>
    </S.Content>
  )
  return (
    <>
      <Button onClick={onOpen} color="white" backgroundColor="black" borderRadius={20}>
        새 목표 등록하기
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding={10}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>{content}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
