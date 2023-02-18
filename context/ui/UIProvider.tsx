import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, UIReducer } from './'

export interface UIState {
  sidemenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)
  return (
    <UIContext.Provider
      value={{
        sidebarmenuOpen: false,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
