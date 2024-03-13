import { useState } from 'react'
import { cn } from '../libs/utils'

import { Button } from './ui/Button'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'

export function NewScoreModal() {
  const { addScore } = useTeams()
  const [score, setScore] = useState('')
  const { newScoreModal, hideNewScoreModal } = useModals()

  function handleButtonClick() {
    addScore(Number(score))
    handleButtonCancel()
  }
  function handleButtonCancel() {
    hideNewScoreModal()
    setScore('')
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
              <label
                htmlFor='small_standard'
                className='start-0 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '
              >
                {/* {teams[teamIndex].name} */}
              </label>
            </div>
            <div className='space-x-5'>
              <Button
                size='sm'
                onClick={handleButtonClick}
              >
                Agregar
              </Button>
              <Button
                size='sm'
                variant='destructive'
                onClick={handleButtonCancel}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
