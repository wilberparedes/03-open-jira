import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sidemenuOpen: boolean
  isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' })
  }

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' })
  }

  const toogleAddingEntry = () => {
    dispatch({ type: '[UI] - Toogle-Adding-Entry' })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        //methods,
        openSideMenu,
        closeSideMenu,
        toogleAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
