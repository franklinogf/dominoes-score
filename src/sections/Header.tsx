import { EndGameButton } from '../components/EndGameButton'
import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'
import { TeamsKeys } from '../types/teams'
import { Button } from '@chakra-ui/react'

export function Header() {
  const { teams } = useTeams()
  const teamsKeys: TeamsKeys[] = Object.keys(teams) as TeamsKeys[]

  return (
    <header
      id='header'
      className='pt-2 sticky top-0 bg-neutral-800/20'
    >
      <div className='text-center mb-1'>
        <EndGameButton />
      </div>
      <div className='flex justify-around'>
        {teamsKeys.map((key) => (
          <Name
            key={key}
            teamIndex={key}
            label={teams[key].name}
          />
        ))}
      </div>
    </header>
  )
}

function Name({ label, teamIndex }: { label: string; teamIndex: TeamsKeys }) {
  const { scoreModalToggle } = useModals()
  const { setTeamToUpdate, gameEnded, winner } = useTeams()
  function handleButtonClick() {
    setTeamToUpdate(teamIndex)
    scoreModalToggle(true)
  }

  return (
    <Button
      isDisabled={gameEnded}
      colorScheme={winner === teamIndex ? 'green' : 'gray'}
      bgColor={winner === teamIndex ? 'green.500' : 'gray.300'}
      textColor={winner === teamIndex ? 'white' : 'black'}
      onClick={handleButtonClick}
    >
      {label}
    </Button>
  )
}
