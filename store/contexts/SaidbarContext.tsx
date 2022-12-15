import {createContext, useReducer} from 'react'
import saidbarReducer from '../reducers/saidbarReducer'

export const SaidbarContext = createContext({});

export const SaidbarState = ({children}) => {

  const initialState = {classes: 'flex flex-col absolute h-screen w-1/4 bg-emerald-400'};
  const [state, dispatch] = useReducer(saidbarReducer, initialState)

  function hide(){
    return dispatch({
      type: 'Hiden'
    })
  }

  function show() {
    return dispatch({
      type: 'Show'
    })
  }

  return (
    <SaidbarContext.Provider value={{state, Hide, Show}}>
      {children}
    </SaidbarContext.Provider>
  )
}