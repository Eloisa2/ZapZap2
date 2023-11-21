import { createContext, useState } from "react";

export const TemaContext=createContext();

export function TemaProvider({children}){
    const [tema,setTema]=useState('white');
    const [corLetra,setCorLetra]=useState('black');
    const [fundoEscuro,setFundoEscuro]=useState('#041527')
    return(
        <TemaContext.Provider value={{tema,setTema,corLetra,setCorLetra,fundoEscuro,setFundoEscuro}}>
            {children}
        </TemaContext.Provider>
    )
}