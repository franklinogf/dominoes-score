import { create } from 'zustand'

interface ModalStore {
  newScoreModal: boolean
  newGameModal: boolean
  AlertModal: boolean
  showNewScoreModal: () => void
  hideNewScoreModal: () => void
  showNewGameModal: () => void
  hideNewGameModal: () => void
  showAlertModal: () => void
  hideAlertModal: () => void
}

export const useModals = create<ModalStore>((set) => {
  return {
    newScoreModal: false,
    newGameModal: true,
    AlertModal: false,
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
      })),
    showAlertModal: () =>
      set(() => ({
        newGameModal: true
      })),
    hideAlertModal: () =>
      set(() => ({
        newGameModal: false
      }))
  }
})
