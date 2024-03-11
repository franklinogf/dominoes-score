import { useState } from 'react'
import { Header } from './sections/Header'
import { ScoreList } from './sections/ScoreList'
import { ScoreTotal } from './sections/ScoreTotal'
import { Modal } from './components/Modal'
export default function App() {
  const [showModal, setShowModal] = useState(true)
  const [team1Name, setTeam1Name] = useState('')
  const [team2Name, setTeam2Name] = useState('')
  const [team1Score, setTeam1Score] = useState<number[]>([])
  const [team2Score, setTeam2Score] = useState<number[]>([])

  function handleModalSetTeams() {
    setShowModal(false)
  }

  function handleTeam1Name(name: string) {
    setTeam1Name(name)
  }
  function handleTeam2Name(name: string) {
    setTeam2Name(name)
  }
  function handleTeam1Score(score: number) {
    setTeam1Score((prevState) => [...prevState, Number(score)])
  }
  return (
    <>
      <Modal
        show={showModal}
        onButtonClick={handleModalSetTeams}
        onTeam1NameChange={handleTeam1Name}
        onTeam2NameChange={handleTeam2Name}
      />
      <main className='min-h-dvh bg-slate-500 flex flex-col px-0.5'>
        <Header
          onAddScoreTeam1={handleTeam1Score}
          teamName1={team1Name}
          teamName2={team2Name}
        />
        <ScoreList
          scoreList1={team1Score}
          scoreList2={team2Score}
        />
        <ScoreTotal
          scoreList1={team1Score}
          scoreList2={team2Score}
        />
      </main>
    </>
  )
}
