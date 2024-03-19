import { Header } from './sections/Header'
import { ScoreList } from './sections/ScoreList'
import { ScoreTotal } from './sections/ScoreTotal'
import { NewGameModal } from './components/NewGameModal'
import { ScoreModal } from './components/ScoreModal'
import { useModals } from './hooks/useModals'
import { useTeams } from './hooks/useTeams'
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks'
export default function App() {
  const { newGameModal } = useModals()
  const { gameEnded } = useTeams()

  return (
    <>
      <div className='fixed left-0 top-0 -z-10 h-full w-full'>
        <div className='px-0.5 absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      </div>
      <main className='min-h-screen flex flex-col px-0.5'>
        {gameEnded && <Fireworks autorun={{ speed: 2 }} />}
        <NewGameModal />
        <ScoreModal />
        {!newGameModal && (
          <>
            <Header />
            <ScoreList />
            <ScoreTotal />
          </>
        )}
      </main>
    </>
  )
}
