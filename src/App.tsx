import { Header } from './sections/Header'
import { ScoreList } from './sections/ScoreList'
import { ScoreTotal } from './sections/ScoreTotal'
import { NewGameModal } from './components/NewGameModal'
import { NewScoreModal } from './components/NewScoreModal'
import { useModals } from './hooks/useModals'

export default function App() {
  const { newGameModal } = useModals()
  return (
    <main className='min-h-dvh bg-slate-500 flex flex-col px-0.5'>
      <NewGameModal />
      <NewScoreModal />
      {!newGameModal && (
        <>
          <Header />
          <ScoreList />
          <ScoreTotal />
        </>
      )}
    </main>
  )
}
