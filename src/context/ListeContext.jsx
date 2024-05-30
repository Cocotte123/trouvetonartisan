import React, { createContext } from "react";
import Artisans from '../datas/datas.json';

export const ListeContext = createContext(null);

const ListeContextProvider = (props) => {
    const contextValue = {Artisans};
    return (
        <ListeContext.Provider value={contextValue}>
            {props.children}
        </ListeContext.Provider>
    )
}

export default ListeContextProvider;