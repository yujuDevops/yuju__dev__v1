import { useEffect, useState } from "react";


export const customHooks = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState({ seguros: false, aseguradoras: false });
    const [activePage, setActivePage] = useState(localStorage.getItem('activePage') || 'home');

    useEffect(() => {
        localStorage.setItem('activePage', activePage);
    }, [activePage]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdown) => {
        setIsDropdownOpen(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const handlePageChange = (page) => {
        setActivePage(page);
        setIsOpen(false);  // Cierra el menú al hacer clic en un enlace
    };


  return {
    toggleMenu,
    toggleDropdown,
    handlePageChange,
    isOpen,
    isDropdownOpen,
    activePage

  }
}
