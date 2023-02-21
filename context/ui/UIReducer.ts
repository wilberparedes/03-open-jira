import { UIState } from './'

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: '[UI] - Toogle-Adding-Entry' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      }
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      }
    case '[UI] - Toogle-Adding-Entry':
      return {
        ...state,
        isAddingEntry: !state.isAddingEntry,
      }
    default:
      return state
  }
}
