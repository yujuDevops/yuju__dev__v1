import {  Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer"
import {HomePage,AutoPage,MotoPage,BiciPage,HogarPage,RusPage,ExpertaPage,ContactPage,InstitucionalPage,SanCristobalPage,SiniestrosPage,ClubYujuPage, IndustrialPage, Embarcaciones, CelularPage, VidaPage, SaludPage, AccidentesPersonales, NotebookPage, PcGamerPage, ConsolaPage, TabletPage, RetiroPage, ViajeroPage,} from '../pages';






const AppRouter = () => {
  return (
    <>
     <Navbar />
            <Routes>
             <Route path="/viajero" element={<ViajeroPage pageId="viajero"/>} />
                <Route path="/home" element={<HomePage pageId="home"/>} />
                <Route path="/auto" element={<AutoPage />} />
                <Route path="/notebook" element={<NotebookPage />} />
                <Route path="/embarcaciones" element={<Embarcaciones />} />
                <Route path="/moto" element={<MotoPage />} />
                <Route path="/bici" element={<BiciPage />} />
                <Route path="/celular" element={<CelularPage />} />
                <Route path="/hogar" element={<HogarPage />} />
                <Route path="/industria" element={< IndustrialPage/>} />
                {/* <Route path="/rus" element={<RusPage />} /> */}
                {/* <Route path="/experta" element={<ExpertaPage />} />
                <Route path="/san-cristobal" element={<SanCristobalPage />} /> */}
                <Route path="/institucional" element={<InstitucionalPage />} />
                <Route path="/consola" element={<ConsolaPage />} />
                <Route path="/tablet" element={< TabletPage/>} />
                {/* <Route path="/siniestros" element={<SiniestrosPage />} /> */}
                {/* <Route path="/club-yuju" element={<ClubYujuPage/>} /> */}
                <Route path="/contacto" element={<ContactPage/>} />
                <Route path="/vida" element={<VidaPage/>} />
                <Route path="/salud" element={<SaludPage/>} />
                <Route path="/pcgamer" element={<PcGamerPage/>} />
                <Route path="/accidentespersonales" element={<AccidentesPersonales/>} />
                <Route path="/retiro" element={<RetiroPage/>} />
                <Route path="/*" element={<Navigate to={"/Home"}/>} />
            </Routes>
            <Footer/>
     

    </>
  )
}

export default AppRouter

