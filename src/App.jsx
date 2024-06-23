import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/HomePage';


function App() {

  return (
    <>
     <Navbar></Navbar>
     <HomePage pageId="home"/>
    </>
  )
}

export default App
