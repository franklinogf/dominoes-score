import { Button } from '../components/ui/Button'
import { useNewScore } from '../hooks/useNewScore'
import { useTeams } from '../hooks/useTeams'
import { TeamsKeys } from '../types/teams'

export function Header({ show, setShow }) {
  const { teams, setTeams } = useTeams()

  function handleEndGame() {
    setTeams({
      team1: {
        name: '',
        scores: []
      },
      team2: {
        name: '',
        scores: []
      }
    })
    setShow(true)
  }
  return (
    <header className='pt-5 sticky top-0 bg-slate-500'>
      {!show && (
        <div className='text-center mb-5'>
          <Button
            onClick={handleEndGame}
            variant='destructive'
          >
            Finalizar juego?
          </Button>
        </div>
      )}
      <div className='flex justify-around'>
        <Name
          teamIndex='team1'
          label={teams.team1.name}
        />
        <Name
          teamIndex='team2'
          label={teams.team2.name}
        />
      </div>
    </header>
  )
}

function Name({ label, teamIndex }: { label: string; teamIndex: TeamsKeys }) {
  const { setShow, setTeamIndex } = useNewScore()
  function handleButtonClick(index: TeamsKeys) {
    setTeamIndex(index)
    setShow(true)
  }

  return (
    <h1
      onClick={() => handleButtonClick(teamIndex)}
      className='text-xl font-bold cursor-pointer'
    >
      {label}
    </h1>
  )
}
