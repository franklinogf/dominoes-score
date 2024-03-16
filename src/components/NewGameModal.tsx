import { useState } from 'react'
import { useTeams } from '../hooks/useTeams'
import { useModals } from '../hooks/useModals'
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react'

export function NewGameModal() {
  const { startGame } = useTeams()
  const { newGameModal, newGameModalToggle } = useModals()
  const [team1Name, setTeam1Name] = useState('')
  const [team2Name, setTeam2Name] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (team1Name === '' || team2Name === '') return
    startGame(team1Name, team2Name)
    newGameModalToggle(false)
  }
  return (
    <Modal
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isCentered
      size='sm'
      isOpen={newGameModal}
      onClose={newGameModalToggle}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>Nombres de los equipos.</ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Stack>
              <InputGroup>
                <Input
                  tabIndex={1}
                  variant='filled'
                  textAlign='center'
                  placeholder='Equipo 1'
                  value={team1Name}
                  onChange={(e) => {
                    setTeam1Name(e.target.value)
                  }}
                />
                <InputRightElement>
                  <IconButton
                    variant='ghost'
                    fontSize='20px'
                    aria-label='Limpiar el nombre del equipo 1'
                    icon={<RestartIcon />}
                    onClick={() => setTeam1Name('')}
                  />
                </InputRightElement>
              </InputGroup>
              <InputGroup>
                <Input
                  tabIndex={2}
                  variant='filled'
                  textAlign='center'
                  placeholder='Equipo 2'
                  value={team2Name}
                  onChange={(e) => {
                    setTeam2Name(e.target.value)
                  }}
                />
                <InputRightElement>
                  <IconButton
                    variant='ghost'
                    fontSize='20px'
                    aria-label='Limpiar el nombre del equipo 2'
                    icon={<RestartIcon />}
                    onClick={() => setTeam2Name('')}
                  />
                </InputRightElement>
              </InputGroup>
            </Stack>
          </ModalBody>
          <ModalFooter className='!justify-center'>
            <Button
              size='sm'
              colorScheme='blue'
              type='submit'
            >
              Continuar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

function RestartIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-5 h-5'
    >
      <path
        fillRule='evenodd'
        d='M7.22 3.22A.75.75 0 0 1 7.75 3h9A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17h-9a.75.75 0 0 1-.53-.22L.97 10.53a.75.75 0 0 1 0-1.06l6.25-6.25Zm3.06 4a.75.75 0 1 0-1.06 1.06L10.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L12 8.94l-1.72-1.72Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
