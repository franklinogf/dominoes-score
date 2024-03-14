import { useModals } from '../hooks/useModals'
import { useTeams } from '../hooks/useTeams'
import { TeamsKeys } from '../types/teams'

export function ScoreList() {
  const { team1, team2 } = useTeams()
  return (
    <section className='grid grid-cols-2 mt-4 divide-x-2'>
      <List
        scoreList={team1.scores}
        team='team1'
      />
      <List
        scoreList={team2.scores}
        team='team2'
      />
    </section>
  )
}

function List({ scoreList, team }: { scoreList: number[]; team: TeamsKeys }) {
  const { setScoreIndexToUpdate, setTeamToUpdate } = useTeams()
  const { showNewScoreModal } = useModals()
  function handleEdit(index: number) {
    setScoreIndexToUpdate(index)
    setTeamToUpdate(team)
    showNewScoreModal()
  }

  return (
    <article className='flex flex-col text-center divide-y-2 divide-slate-400/50 px-2'>
      {scoreList.map((score, index) => {
        return (
          <button
            key={team + index}
            onClick={() => handleEdit(index)}
            className='font-semibold text-lg text-white py-0.5 cursor-pointer hover:bg-slate-700/80  flex-1'
          >
            {score}
          </button>
        )
      })}
    </article>
  )
}
