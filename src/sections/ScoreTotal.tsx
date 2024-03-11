export function ScoreTotal({
  scoreList1,
  scoreList2
}: {
  scoreList1: number[]
  scoreList2: number[]
}) {
  const totalTeam1 = scoreList1.reduce((a, b) => a + b, 0)
  const totalTeam2 = scoreList2.reduce((a, b) => a + b, 0)
  return (
    <section className='grid grid-cols-2 justify-center text-center border-t-2 border-t-black py-2 mt-auto'>
      <span className='font-extrabold text-xl text-white'>{totalTeam1}</span>
      <span className='font-extrabold text-xl text-white'>{totalTeam2}</span>
    </section>
  )
}
