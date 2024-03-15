import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  PopoverFooter,
  ButtonGroup,
  Portal
} from '@chakra-ui/react'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'

export function EndGameButton() {
  const { newGameModalToggle } = useModals()
  const { endGame } = useTeams()

  function handleEndGame() {
    endGame()
    newGameModalToggle(true)
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
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>Esta seguro que quieres finalizar el juego?</PopoverBody>
              <PopoverFooter>
                <ButtonGroup
                  display='flex'
                  justifyContent='center'
                  gap={2}
                >
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
          </Portal>
        </>
      )}
    </Popover>
  )
}
