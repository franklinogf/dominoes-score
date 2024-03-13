import { Header } from './sections/Header'
import { ScoreList } from './sections/ScoreList'
import { ScoreTotal } from './sections/ScoreTotal'
import { NewGameModal } from './components/NewGameModal'
import { NewScoreModal } from './components/NewScoreModal'
import { useModals } from './hooks/useModals'
import { useTeams } from './hooks/useTeams'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'
export default function App() {
  const { newGameModal } = useModals()
  const { gameEnded } = useTeams()
  useEffect(() => {
    if (!gameEnded) return
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)
  }, [gameEnded])

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
