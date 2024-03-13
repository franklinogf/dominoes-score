import { Header } from './sections/Header'
import { ScoreList } from './sections/ScoreList'
import { ScoreTotal } from './sections/ScoreTotal'
import { NewGameModal } from './components/NewGameModal'
import { TeamsProvider } from './contexts/teams'
import { NewScoreModal } from './components/NewScoreModal'
import { NewScoreModalProvider } from './contexts/newScore'
import { useState } from 'react'

export default function App() {
  const [showModal, setShowModal] = useState(true)
  return (
    <TeamsProvider>
      <NewGameModal
        show={showModal}
        setShow={setShowModal}
      />
      <NewScoreModalProvider>
        <NewScoreModal />
        <main className='min-h-dvh bg-slate-500 flex flex-col px-0.5'>
          <Header
            show={showModal}
            setShow={setShowModal}
          />
          <ScoreList />
          <ScoreTotal />
        </main>
      </NewScoreModalProvider>
    </TeamsProvider>
  )
}
