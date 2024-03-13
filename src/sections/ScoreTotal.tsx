import { useTeams, sumScores } from '../hooks/useTeams'
import { cn } from '../libs/utils'

export function ScoreTotal() {
  const { team1, team2, gameEnded } = useTeams()
  const totalTeam1 = sumScores(team1.scores)
  const totalTeam2 = sumScores(team2.scores)
  return (
    <section className='grid grid-cols-2 justify-center text-center border-t-2 border-t-black py-2 mt-auto'>
      <span className={cn('font-extrabold text-xl text-white', { 'text-green-500': gameEnded })}>
        {totalTeam1}
      </span>
      <span className={cn('font-extrabold text-xl text-white', { 'text-green-500': gameEnded })}>
        {totalTeam2}
      </span>
    </section>
  )
}
