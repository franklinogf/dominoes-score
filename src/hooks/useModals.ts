import { create } from 'zustand'

interface ModalStore {
  newScoreModal: boolean
  newGameModal: boolean
  showScoreModal: () => void
  hideScoreModal: () => void
  showNewGameModal: () => void
  hideNewGameModal: () => void
}

export const useModals = create<ModalStore>((set) => {
  return {
    newScoreModal: false,
    newGameModal: true,
    showScoreModal: () =>
      set(() => ({
        newScoreModal: true
      })),
    hideScoreModal: () =>
      set(() => ({
        newScoreModal: false
      })),
    showNewGameModal: () =>
      set(() => ({
        newGameModal: true
      })),
    hideNewGameModal: () =>
      set(() => ({
        newGameModal: false
      }))
  }
})
