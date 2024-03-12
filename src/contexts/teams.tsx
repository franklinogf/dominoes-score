import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { Teams } from '../types/teams'

interface TeamsContextType {
  teams: Teams
  setTeams: Dispatch<SetStateAction<Teams>>
}
export const TeamsContext = createContext<TeamsContextType>({
  teams: {
    team1: {
      name: '',
      scores: []
    },
    team2: {
      name: '',
      scores: []
    }
  },
  setTeams: () => {}
})

export function TeamsProvider({ children }: { children: React.ReactNode }) {
  const [teams, setTeams] = useState<Teams>({
    team1: {
      name: '',
      scores: []
    },
    team2: {
      name: '',
      scores: []
    }
  })
  return <TeamsContext.Provider value={{ teams, setTeams }}>{children}</TeamsContext.Provider>
}
