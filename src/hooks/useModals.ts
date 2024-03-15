import { create } from 'zustand'

interface ModalStore {
  scoreModal: boolean
  newGameModal: boolean
  newGameModalToggle: (show?: boolean) => void
  scoreModalToggle: (show?: boolean) => void
}

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
    scoreModalToggle: (show = undefined) =>
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
