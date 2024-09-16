import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import 'animate.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Resume from './Components/Resume/Resume'
import Projects from './Components/Projects/Projects'
import Pricing from './Components/Pricing/Pricing'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {
  return (
   <>
<Router>
<Navbar/>
  <Routes>
 
    <Route exact path="/" element={<Home/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/services" element={<Services/>} />
    <Route  path="/resume" element={<Resume/>} />
    <Route  path="/projects" element={<Projects/>} />
    <Route  path="/pricing" element={<Pricing/>} />
    <Route  path="/blog" element={<Blog/>} />
    <Route  path="/contact" element={<Contact/>} />
   
  </Routes>
  <Footer/>
</Router>
   </>
  );
}

export default App;
