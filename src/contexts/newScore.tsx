import { Dispatch, SetStateAction, createContext, useState } from 'react'
type TeamIndex = 0 | 1
interface NewScore {
  show: boolean
  teamIndex: TeamIndex
  setShow: Dispatch<SetStateAction<boolean>>
  setTeamIndex: Dispatch<SetStateAction<TeamIndex>>
}
export const NewScoreContext = createContext<NewScore>({
  show: false,
  teamIndex: 0,
  setShow: () => {},
  setTeamIndex: () => {}
})

export function NewScoreModalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false)
  const [teamIndex, setTeamIndex] = useState<TeamIndex>(0)
  return (
    <NewScoreContext.Provider value={{ show, setShow, teamIndex, setTeamIndex }}>
      {children}
    </NewScoreContext.Provider>
  )
}
