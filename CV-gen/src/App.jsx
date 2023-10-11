import Form from './components/Form'
import NavbarSmall from './components/NavbarSmall'
import Navbar from './components/navbar'
import './App.css'

function App() {
  return (
    <div id='Container'>
      <Navbar />
      <NavbarSmall />
      <div className="container my-2" id='AllContainer'>
        <Form />
      </div>
    </div>
  )
}

export default App