import { Button } from '../components/ui/Button'
import { useNewScore } from '../hooks/useNewScore'
import { useTeams } from '../hooks/useTeams'
import { TeamsKeys } from '../types/teams'

export function Header() {
  const { teams } = useTeams()
  return (
    <header className='flex justify-around pt-10 sticky top-0 bg-slate-500 '>
      <Name
        teamIndex='team1'
        label={teams.team1.name}
      />
      <Name
        teamIndex='team2'
        label={teams.team2.name}
      />
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
