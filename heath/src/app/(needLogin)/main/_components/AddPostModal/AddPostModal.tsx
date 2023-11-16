import { Modal, ModalBody, ModalCloseButton, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { AddPostContent } from '..'
import * as S from './AddPostModal.styles'

interface AddPostModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AddPostModal = ({ isOpen, onClose }: PropsWithChildren<AddPostModalProps>) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <S.AddPostModalContainer>
          <ModalBody>
            <AddPostContent onClose={onClose} />
          </ModalBody>
        </S.AddPostModalContainer>
      </Modal>
    </div>
  )
}
