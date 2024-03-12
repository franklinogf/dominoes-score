import { useNewScore } from '../hooks/useNewScore'
import { useTeams } from '../hooks/useTeams'

export function Header() {
  const { teams } = useTeams()
  return (
    <header className='flex justify-around pt-10 sticky top-0 bg-slate-500 '>
      <Name
        teamIndex={0}
        label={teams.team1.name}
      />
      <Name
        teamIndex={1}
        label={teams.team2.name}
      />
    </header>
  )
}

function Name({ label, teamIndex }: { label: string; teamIndex: 0 | 1 }) {
  const { setShow, setTeamIndex } = useNewScore()
  function handleButtonClick(index: 0 | 1) {
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
