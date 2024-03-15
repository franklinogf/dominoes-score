import { useState } from 'react'
import { useTeams } from '../hooks/useTeams'
import { useModals } from '../hooks/useModals'
import {
  Button,
  Grid,
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
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isCentered
      size='sm'
      isOpen={newGameModal}
      onClose={hideNewGameModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>Nombres de los equipos.</ModalHeader>
        <ModalBody>
          <Grid gap={2}>
            <Input
              variant='filled'
              textAlign='center'
              placeholder='Equipo 1'
              value={team1Name}
              onChange={(e) => {
                setTeam1Name(e.target.value)
              }}
            />
            <Input
              variant='filled'
              textAlign='center'
              placeholder='Equipo 2'
              value={team2Name}
              onChange={(e) => {
                setTeam2Name(e.target.value)
              }}
            />
          </Grid>
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
