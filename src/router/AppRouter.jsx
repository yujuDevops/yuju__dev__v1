import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';


import HomePage from '../pages/homepage/HomePage';
import AutoPage from '../pages/autoPage/AutoPage';
import MotoPage from '../pages/motoPage/MotoPage';
import BiciPage from '../pages/biciPage/BiciPage';
import HogarPage from '../pages/hogarPage/HogarPage';
import RusPage from '../pages/rusPage.jsx/RusPage';
import ExpertaPage from '../pages/expertaPage/ExpertaPage';
import InstitucionalPage from '../pages/institucionalPage/InstitucionalPage';
import SanCristobalPage from '../pages/sanCristobalPage/SanCristobalPage';
import SiniestrosPage from '../pages/siniestrosPage/SiniestrosPage';
import ClubYujuPage from '../pages/clubYujuPage/ClubYujuPage';
import ContactPage from '../pages/contactoPage/ContactPage';

const AppRouter = () => {
  return (
    <>

<Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<HomePage pageId="home"/>} />
                <Route path="/auto" element={<AutoPage />} />
                <Route path="/moto" element={<MotoPage />} />
                <Route path="/bici" element={<BiciPage />} />
                <Route path="/hogar" element={<HogarPage />} />
                <Route path="/rus" element={<RusPage />} />
                <Route path="/experta" element={<ExpertaPage />} />
                <Route path="/san-cristobal" element={<SanCristobalPage />} />
                <Route path="/institucional" element={<InstitucionalPage />} />
                <Route path="/siniestros" element={<SiniestrosPage />} />
                <Route path="/club-yuju" element={<ClubYujuPage/>} />
                <Route path="/contacto" element={<ContactPage/>} />

                <Route path="/" element={<Navigate to={"/Home"}/>} />
            </Routes>
        </Router>

    </>
  )
}

export default AppRouter

