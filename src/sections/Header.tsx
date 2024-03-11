export function Header({
  teamName1,
  teamName2,
  onAddScoreTeam1
}: {
  teamName1: string
  teamName2: string
  onAddScoreTeam1: (score: number) => void
}) {
  return (
    <header className='flex justify-around pt-10 sticky top-0 bg-slate-500 '>
      <h1
        onClick={() => onAddScoreTeam1(10)}
        className='text-xl font-bold'
      >
        {teamName1}
      </h1>
      <h1 className='text-xl font-bold'>{teamName2}</h1>
    </header>
  )
}
