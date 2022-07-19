
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import { DcPage, MarvelPage } from '../heroes';
// import { LoginPage } from '../auth'
// import { Navbar } from '../ui'
import LoginPage from '../auth/pages/LoginPage'
import DcPage from '../heroes/pages/DcPage'
import MarvelPage from '../heroes/pages/MarvelPage'
import { Navbar } from '../ui/components/Navbar'

// ! intenté nuevamente con lo de archivos de barril, sin embargo
// ! me dió error en el componente Marvelpage.

const AppRouter = () => {
    return (
        
        <>
        
            <Navbar />
            
            <Routes>
                <Route path="marvel" element={ <MarvelPage />  } />
                <Route path="dc" element={<DcPage/>} />
                <Route path="login" element={<LoginPage/>} />
                <Route path="/" element={<Navigate to="/marvel" /> } />
            </Routes>
        </>

        
        )
    }

export default AppRouter