import { create } from 'zustand'

interface ModalStore {
  newScoreModal: boolean
  newGameModal: boolean
  showNewScoreModal: () => void
  hideNewScoreModal: () => void
  showNewGameModal: () => void
  hideNewGameModal: () => void
}

export const useModals = create<ModalStore>((set) => {
  return {
    newScoreModal: false,
    newGameModal: true,
    showNewScoreModal: () =>
      set(() => ({
        newScoreModal: true
      })),
    hideNewScoreModal: () =>
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
