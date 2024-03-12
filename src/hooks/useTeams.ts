import { useContext } from 'react'
import { TeamsContext } from '../contexts/teams'

export function useTeams() {
  const { teams, setTeams } = useContext(TeamsContext)
  return { teams, setTeams }
}
