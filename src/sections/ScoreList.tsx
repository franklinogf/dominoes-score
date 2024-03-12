import { useTeams } from '../hooks/useTeams'

export function ScoreList() {
  const { teams } = useTeams()
  return (
    <section className='grid grid-cols-2 mt-4 divide-x-2'>
      <List scoreList={teams.team1.scores} />
      <List scoreList={teams.team2.scores} />
    </section>
  )
}

function List({ scoreList }: { scoreList: number[] }) {
  return (
    <article className='flex flex-col text-center divide-y-2 divide-slate-400/50 px-2'>
      {scoreList.map((score, index) => {
        return (
          <span
            key={index}
            className='font-semibold text-lg text-white py-0.5'
          >
            {score}
          </span>
        )
      })}
    </article>
  )
}
