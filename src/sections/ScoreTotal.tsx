import { useTeams, sumScores } from '../hooks/useTeams'
import { cn } from '../libs/utils'

export function ScoreTotal() {
  const { teams, gameEnded } = useTeams()
  const totalTeam1 = sumScores(teams.team1.scores)
  const totalTeam2 = sumScores(teams.team2.scores)
  return (
    <section className='fixed left-0 right-0 bottom-0 grid grid-cols-2 justify-center text-center border-t-2 border-t-white py-5 bg-neutral-800/90 z-10'>
      <span className={cn('font-extrabold text-xl text-white', { 'text-green-500': gameEnded })}>
        {totalTeam1}
      </span>
      <span className={cn('font-extrabold text-xl text-white', { 'text-green-500': gameEnded })}>
        {totalTeam2}
      </span>
    </section>
  )
}
