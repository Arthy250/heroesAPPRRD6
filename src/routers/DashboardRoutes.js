import React from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
         <Navbar/>

         <div>
            
            <Routes>
                <Route path="marvel" element={<MarvelScreen/>}/>
                <Route path="dc" element={<DcScreen/>}/>
                <Route path="heroe:heroeId" element={<HeroScreen/>}/>

                <Route path="*" element={<Navigate to="marvel" />}/>
            </Routes>

        </div>   
        </>
    )
}
