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
  NumberDecrementStepper,
  FormControl
} from '@chakra-ui/react'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'

export function NewScoreModal() {
  const { addScore, scoreIndexToUpdate, editScore, setScoreIndexToUpdate, deleteScore, limit } =
    useTeams()
  const { newScoreModal, hideNewScoreModal } = useModals()

  function handleFormSubmit(e: React.FormEvent) {
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
    hideNewScoreModal()
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
        <ModalHeader textAlign={'center'}>
          {scoreIndexToUpdate === undefined ? 'Agregar nueva puntuación' : 'Editar puntuación'}
        </ModalHeader>
        <form onSubmit={handleFormSubmit}>
          <ModalBody>
            <FormControl>
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
                  children={<PlustIcon />}
                />
                <NumberInputField
                  className='!text-center'
                  p={0}
                  name='score'
                  placeholder={scoreIndexToUpdate === undefined ? 'Agregar valor' : 'Editar valor'}
                />

                <NumberDecrementStepper
                  fontSize={25}
                  textColor={'pink.300'}
                  border={0}
                  children={<MinusIcon />}
                />
              </NumberInput>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent={'center'}>
            <ButtonGroup gap={3}>
              <Button
                type='submit'
                colorScheme='blue'
                size='sm'
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
        </form>
      </ModalContent>
    </Modal>
  )
}
function MinusIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M5 12h14'
      />
    </svg>
  )
}
function PlustIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  )
}
