import React, {useState} from 'react'



export const Context = React.createContext();

const Store = ({children}) => {
    const [viewBtn, setViewBtn] = useState(false)
    return <Context.Provider value={[viewBtn, setViewBtn]} >{children}</Context.Provider>
}

export default Store;