import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Routing from './components/routing'

function App() {

  return (
    <>
   
    <BrowserRouter>
        {/* this part is what will give the path for the nav bar */}
        <Navbar/> 
        <Routing/>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <Footer/>
      </BrowserRouter>
     
    
    </>
  )
}

export default App
