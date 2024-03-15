import { EndGameButton } from '../components/EndGameButton'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'
import { TeamsKeys } from '../types/teams'
import { Button } from '@chakra-ui/react'

export function Header() {
  const { team1, team2 } = useTeams()

  return (
    <header className='pt-5 sticky top-0 bg-slate-500/90'>
      <div className='text-center mb-5'>
        <EndGameButton />
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
  const { showScoreModal } = useModals()
  const { setTeamToUpdate, gameEnded } = useTeams()
  function handleButtonClick() {
    if (gameEnded) return
    setTeamToUpdate(teamIndex)
    showScoreModal()
  }

  return (
    <Button
      variant='ghost'
      onClick={handleButtonClick}
    >
      {label}
    </Button>
  )
}
