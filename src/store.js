import React, {useState} from 'react'



export const Context = React.createContext();

const Store = ({children}) => {
    const [viewBtn, setViewBtn] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    return <Context.Provider value={[viewBtn, setViewBtn, loggedIn, setLoggedIn]} >{children}</Context.Provider>
}

export default Store;