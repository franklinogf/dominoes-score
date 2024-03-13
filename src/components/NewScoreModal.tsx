import { useState } from 'react'
import { cn } from '../libs/utils'
import { useTeams } from '../hooks/useTeams'
import { useNewScore } from '../hooks/useNewScore'
import { Button } from './ui/Button'

export function NewScoreModal() {
  const { teams, setTeams } = useTeams()
  const [score, setScore] = useState('')
  const { show, setShow, teamIndex } = useNewScore()

  function handleButtonClick() {
    setShow(false)
    setTeams((prevTeams) => {
      const team = { ...prevTeams[teamIndex] }
      team.scores = [...team.scores, Number(score)]

      return {
        ...prevTeams,
        [teamIndex]: team
      }
    })
    setScore('')
  }
  function handleButtonCancel() {
    setShow(false)
    setScore('')
  }
  return (
    <div
      id='popup-modal'
      tabIndex={-1}
      className={cn(
        'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full',
        { flex: show, hidden: !show }
      )}
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow '>
          <div className='px-4 py-8 md:p-5 text-center space-y-8'>
            <div className='relative z-0'>
              <input
                type='text'
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
                {teams[teamIndex].name}
              </label>
            </div>
            <Button onClick={handleButtonClick}>Continuar</Button>
            <Button onClick={handleButtonCancel}>Cancelar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
