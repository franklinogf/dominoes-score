import { useState } from 'react'
import { useTeams } from '../hooks/useTeams'
import { useModals } from '../hooks/useModals'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

export function NewGameModal() {
  const { startGame } = useTeams()
  const { newGameModal, hideNewGameModal } = useModals()
  const [team1Name, setTeam1Name] = useState('')
  const [team2Name, setTeam2Name] = useState('')

  function handleButtonClick() {
    startGame(team1Name, team2Name)
    hideNewGameModal()
  }
  return (
    <Modal
      isCentered
      size='sm'
      isOpen={newGameModal}
      onClose={hideNewGameModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className='text-center'>
          Nombres de los equipos.
        </ModalHeader>
        <ModalBody>
          <Input
            className='text-center my-2'
            placeholder='Equipo 1'
            value={team1Name}
            onChange={(e) => {
              setTeam1Name(e.target.value)
            }}
          />
          <Input
            className='text-center'
            placeholder='Equipo 2'
            value={team2Name}
            onChange={(e) => {
              setTeam2Name(e.target.value)
            }}
          />
        </ModalBody>
        <ModalFooter className='!justify-center'>
          <Button
            size='sm'
            colorScheme='blue'
            onClick={handleButtonClick}
          >
            Continuar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
