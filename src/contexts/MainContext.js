import { createContext, useContext, useState } from 'react'

const MainContext = createContext()

const MainContextProvider = ({ children }) => {
    const [ initState, setInitState ] = useState({})

    return (
        <MainContext.Provider value={[initState, setInitState]}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    const [values, setValues] = useContext(MainContext)

    const updateContextValues = (updateParams) => {
        setValues({ ...values, ...updateParams })
    }

    return {
        values,
        updateContextValues,
    }
}

export default MainContextProvider
