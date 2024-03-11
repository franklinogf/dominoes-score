export function ScoreList({
  scoreList1,
  scoreList2
}: {
  scoreList1: number[]
  scoreList2: number[]
}) {
  return (
    <section className='grid grid-cols-2 mt-4 divide-x-2'>
      <List scoreList={scoreList1} />
      <List scoreList={scoreList2} />
    </section>
  )
}

function List({ scoreList }: { scoreList: number[] }) {
  return (
    <article className='grid text-center divide-y-2 divide-slate-400/50 px-2'>
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
