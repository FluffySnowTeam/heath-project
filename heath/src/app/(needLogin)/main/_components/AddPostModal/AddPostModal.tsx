import { Modal, ModalBody, ModalCloseButton, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { AddPostContent } from '..'
import * as S from './AddPostModal.styles'
import type { AddPostModalProps } from './AddPostModal.types'

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
