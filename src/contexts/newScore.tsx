import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { TeamsKeys } from '../types/teams'

interface NewScore {
  show: boolean
  teamIndex: TeamsKeys
  setShow: Dispatch<SetStateAction<boolean>>
  setTeamIndex: Dispatch<SetStateAction<TeamsKeys>>
}
export const NewScoreContext = createContext<NewScore>({
  show: false,
  teamIndex: 'team1',
  setShow: () => {},
  setTeamIndex: () => {}
})

export function NewScoreModalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false)
  const [teamIndex, setTeamIndex] = useState<TeamsKeys>('team1')
  return (
    <NewScoreContext.Provider value={{ show, setShow, teamIndex, setTeamIndex }}>
      {children}
    </NewScoreContext.Provider>
  )
}
