import { Button } from '../components/ui/Button'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'
import { TeamsKeys } from '../types/teams'

export function Header() {
  const { team1, team2, endGame } = useTeams()
  const { showNewGameModal } = useModals()

  function handleEndGame() {
    endGame()
    showNewGameModal()
  }
  return (
    <header className='pt-5 sticky top-0 bg-slate-500'>
      <div className='text-center mb-5'>
        <Button
          onClick={handleEndGame}
          variant='destructive'
          size='sm'
        >
          Finalizar juego?
        </Button>
      </div>

      <div className='flex justify-around'>
        <Name
          teamIndex='team1'
          label={team1.name}
        />
        <Name
          teamIndex='team2'
          label={team2.name}
        />
      </div>
    </header>
  )
}

function Name({ label, teamIndex }: { label: string; teamIndex: TeamsKeys }) {
  const { showNewScoreModal } = useModals()
  const { setTeamToUpdate, gameEnded } = useTeams()
  function handleButtonClick() {
    if (gameEnded) return
    setTeamToUpdate(teamIndex)
    showNewScoreModal()
  }

  return (
    <h1
      onClick={handleButtonClick}
      className='text-xl font-bold cursor-pointer'
    >
      {label}
    </h1>
  )
}
