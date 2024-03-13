import { useTeams } from '../hooks/useTeams'

export function ScoreTotal() {
  const { team1, team2 } = useTeams()
  const totalTeam1 = team1.scores.reduce((a, b) => a + b, 0)
  const totalTeam2 = team2.scores.reduce((a, b) => a + b, 0)
  return (
    <section className='grid grid-cols-2 justify-center text-center border-t-2 border-t-black py-2 mt-auto'>
      <span className='font-extrabold text-xl text-white'>{totalTeam1}</span>
      <span className='font-extrabold text-xl text-white'>{totalTeam2}</span>
    </section>
  )
}
