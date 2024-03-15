import { create } from 'zustand'
type State = {
  scoreModal: boolean
  newGameModal: boolean
}
type Action = {
  newGameModalToggle: (show?: State['newGameModal']) => void
  scoreModalToggle: (show?: State['scoreModal']) => void
}
type ModalStore = State & Action

export const useModals = create<ModalStore>((set) => {
  return {
    scoreModal: false,
    newGameModal: true,
    newGameModalToggle: (show) =>
      set((state) => {
        if (show === undefined) {
          return {
            newGameModal: !state.newGameModal
          }
        }
        return { newGameModal: show }
      }),
    scoreModalToggle: (show) =>
      set((state) => {
        if (show === undefined) {
          return {
            scoreModal: !state.scoreModal
          }
        }
        return { scoreModal: show }
      })
  }
})
