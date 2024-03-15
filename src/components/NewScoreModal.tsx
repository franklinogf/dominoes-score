import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ButtonGroup,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'

export function NewScoreModal() {
  const { addScore, scoreIndexToUpdate, editScore, setScoreIndexToUpdate, deleteScore, limit } =
    useTeams()
  const [score, setScore] = useState('')
  const { newScoreModal, hideNewScoreModal } = useModals()

  function handleButtonClick() {
    if (scoreIndexToUpdate !== undefined) {
      editScore(Number(score))
    } else {
      addScore(Number(score))
    }
    handleButtonCancel()
  }
  function handleButtonCancel() {
    hideNewScoreModal()
    setScore('')
    setScoreIndexToUpdate(undefined)
  }
  function handleDelete() {
    deleteScore()
    handleButtonCancel()
  }
  return (
    <Modal
      isCentered
      size='sm'
      isOpen={newScoreModal}
      onClose={handleButtonCancel}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className='text-center'>
          {scoreIndexToUpdate === undefined ? 'Agregar nueva puntuación' : 'Editar puntuación'}
        </ModalHeader>
        <ModalBody>
          <NumberInput
            variant={'filled'}
            min={0}
            max={limit}
            size='sm'
          >
            <NumberIncrementStepper
              fontSize={25}
              textColor={'green.300'}
              border={0}
              children='+'
            />
            <NumberInputField
              className='!text-center'
              p={0}
              placeholder='Agregar valor'
              value={score}
              onChange={(e) => {
                setScore(e.target.value)
              }}
            />

            <NumberDecrementStepper
              fontSize={25}
              textColor={'pink.300'}
              border={0}
              children='-'
            />
          </NumberInput>
        </ModalBody>
        <ModalFooter className='!justify-center'>
          <ButtonGroup gap={3}>
            <Button
              colorScheme='blue'
              size='sm'
              onClick={handleButtonClick}
            >
              {scoreIndexToUpdate === undefined ? 'Agregar' : 'Editar'}
            </Button>
            {scoreIndexToUpdate !== undefined && (
              <Button
                colorScheme='red'
                size='sm'
                onClick={handleDelete}
              >
                Borrar
              </Button>
            )}
            <Button
              colorScheme='gray'
              size='sm'
              onClick={handleButtonCancel}
            >
              Cancelar
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
