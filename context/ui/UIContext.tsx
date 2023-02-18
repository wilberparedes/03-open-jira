import { createContext } from 'react'
/*
    TODO: decirle como luce
 * importante:
 * los diferente lugares sepan cómo luce ese contexto:
 ** que propiedades Tiene
 ** metodos que Tiene
 ** lo que expone
* poder decirle a los componentes de que información dispone si se está importanto este contexto */

// este no es el estado inicial del contexto
export interface ContextProps {
  sidebarmenuOpen: boolean
}

export const UIContext = createContext({} as ContextProps)
