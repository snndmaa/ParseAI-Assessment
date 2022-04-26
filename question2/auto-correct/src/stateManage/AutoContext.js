import {createContext, useReducer} from "react";
import AutoReducer from './AutoReducer'

const AutoContext = createContext()

export const ContextProvider = ({children}) => {
    const initialState = {
        corrections : null,
        areaText : '',
        textArray : null
    }


    const [state, dispatch] = useReducer(AutoReducer, initialState)


    return <AutoContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </AutoContext.Provider>

}

export default AutoContext