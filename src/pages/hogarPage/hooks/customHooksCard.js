import { useState } from "react";
const initialState = {
    nombre:"",
    telefono:""
  }


export const customHooksCard = () => {
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [datos, setDatos] = useState(initialState)
  
  
  
    const openModal = (planDetails) => {
      setSelectedPlan(planDetails);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedPlan(null);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
     
  
  
    }
  
  const handleChange = ({target}) => {
      const {name, value} = target
      setDatos({...datos,
         [name]:value})
  }
  
  const handleClick = () => {
  
    console.log(datos);
    setDatos(initialState)
    
  };
  
    return {
        modalIsOpen,
        selectedPlan,
        datos,
        setDatos,
        openModal,
        closeModal,
        handleChange,
        handleSubmit,
        handleClick,
      
          }
}
