import { Header } from './sections/Header'
import { ScoreList } from './sections/ScoreList'
import { ScoreTotal } from './sections/ScoreTotal'

export default function App() {
  return (
    <main className='min-h-dvh bg-slate-500 flex flex-col px-0.5'>
      <Header />
      <ScoreList />
      <ScoreTotal />
    </main>
  )
}
