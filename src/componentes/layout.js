import React from 'react';
import Header from '../componentes/header';


const Layout =({children}) =>{
    return(
        <>
        <Header></Header>
        <main>{children}</main>
        </>
    )
}

export default Layout;