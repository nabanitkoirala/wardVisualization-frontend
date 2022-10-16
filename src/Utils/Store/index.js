import React, { useState } from 'react';



export const isAuthorizedContext = React.createContext(false);
const Store = ({ children }) => {

    const [isAuthorized, setIsAuthorized] = useState(false);

    return (
        <isAuthorizedContext.Provider value={[isAuthorized, setIsAuthorized]} >{children}</isAuthorizedContext.Provider>
    )
}


export default Store;