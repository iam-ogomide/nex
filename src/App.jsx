import './App.css'
import Blog from './components/Blog'
import Care from './components/Care'
import Clients from './components/Clients'
import Design from './components/Design'
import Footer from './components/Footer'
import Home from './components/Home'
import Manage from './components/Manage'
import Navbar from './components/Navbar'
import Unseen from './components/Unseen'

function App() {

  return (
    <>
    <div className="bg-transparent">
      <Navbar />
       <Home />
    </div>
    <Clients />
    <Manage />
    <Unseen />
    <Design />
    <Blog />
    <Footer />
    </>
  )
}

export default App
