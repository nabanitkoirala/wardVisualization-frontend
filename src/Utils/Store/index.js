import React, { useState } from 'react';




export const isAuthorizedContext = React.createContext(false);
export const statusProgressContext = React.createContext(0)
const Store = ({ children }) => {

    const [isAuthorized, setIsAuthorized] = useState(false);
    const [statusProgress, setStatusProgress] = useState(0)

    return (
        <isAuthorizedContext.Provider value={[isAuthorized, setIsAuthorized]} >
            <statusProgressContext.Provider value={[statusProgress, setStatusProgress]}>
                {children}
            </statusProgressContext.Provider>
        </isAuthorizedContext.Provider>
    )
}


export default Store;