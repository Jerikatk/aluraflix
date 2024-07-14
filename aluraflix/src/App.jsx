import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { NewVideo } from './pages/NewVideo'
function App() {
  

  return (
   <Router>
    <Header/>
      <Routes>
            <Route path='/' element={<Home/>}></Route>  
            <Route path='/newvideo'  element={<NewVideo/>}></Route>  
      </Routes>
    <Footer/>
   </Router>
  )
}

export default App
