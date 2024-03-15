import { FormEvent } from 'react'
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

export function ScoreModal() {
  const { addScore, scoreIndexToUpdate, editScore, setScoreIndexToUpdate, deleteScore, limit } =
    useTeams()
  const { newScoreModal, hideScoreModal } = useModals()

  function handleButtonClick(e: FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const score = formData.get('score')
    if (score === '') return
    if (scoreIndexToUpdate !== undefined) {
      editScore(Number(score))
    } else {
      addScore(Number(score))
    }
    handleButtonCancel()
  }
  function handleButtonCancel() {
    hideScoreModal()
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
