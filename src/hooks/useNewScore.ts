import { useContext } from 'react'
import { NewScoreContext } from '../contexts/newScore'

export function useNewScore() {
  const { show, setShow, teamIndex, setTeamIndex } = useContext(NewScoreContext)

  return { show, setShow, teamIndex, setTeamIndex }
}
