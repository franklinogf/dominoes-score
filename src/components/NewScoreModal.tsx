import { useState } from 'react'
import { cn } from '../libs/utils'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'

export function NewScoreModal() {
  const { addScore, scoreIndexToUpdate, editScore, setScoreIndexToUpdate, deleteScore } = useTeams()
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
    <div
      id='popup-modal'
      tabIndex={-1}
      className={cn(
        'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full',
        { flex: newScoreModal, hidden: !newScoreModal }
      )}
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow '>
          <div className='px-4 py-8 md:p-5 text-center space-y-8'>
            <div className='relative z-0'>
              <h1>
                {scoreIndexToUpdate === undefined
                  ? 'Agregar nueva puntuación'
                  : 'Editar puntuación'}
              </h1>
              <input
                type='number'
                id='small_standard'
                className='block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=''
                value={score}
                onChange={(e) => {
                  setScore(e.target.value)
                }}
              />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
