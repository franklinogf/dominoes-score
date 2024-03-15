import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  PopoverFooter,
  ButtonGroup
} from '@chakra-ui/react'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'

export function EndGameButton() {
  const { showNewGameModal } = useModals()
  const { endGame } = useTeams()

  function handleEndGame() {
    endGame()
    showNewGameModal()
  }
  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button
              colorScheme='red'
              size='xs'
            >
              Finalizar juego?
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>Esta seguro que quieres finalizar el juego?</PopoverBody>
            <PopoverFooter>
              <ButtonGroup gap={2}>
                <Button
                  variant='outline'
                  colorScheme='red'
                  size='xs'
                  onClick={handleEndGame}
                >
                  Aceptar
                </Button>

                <Button
                  size='xs'
                  variant='outline'
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </>
      )}
    </Popover>
  )
}
