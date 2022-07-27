
import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import { DcPage, MarvelPage } from '../heroes';
// import { LoginPage } from '../auth'
// import { Navbar } from '../ui'
import LoginPage from '../auth/pages/LoginPage'
// import DcPage from '../heroes/pages/DcPage'
// import MarvelPage from '../heroes/pages/MarvelPage'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// import { Navbar } from '../ui/components/Navbar'

// ! intenté nuevamente con lo de archivos de barril, sin embargo
// ! me dió error en el componente Marvelpage.

const AppRouter = () => {
    return (
        
        <>  
            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute> 
                }
                />


                {/* <Route path="login" element={<LoginPage/>} /> */}
                <Route path="/*" element={ 
                <PrivateRoute >
                    <HeroesRoutes />
                </PrivateRoute> } />
                
                {/* <Route path="/*" element={<HeroesRoutes/>} /> */}
            </Routes>
        </>

        
        )
    }

export default AppRouter