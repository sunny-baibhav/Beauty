
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Main from './pages/Main'
import PricingSection from './pages/titlecard/PricingSection'
import Home from './pages/Home'
import Aboutus from './pages/cms/Aboutus'
import ServicesSection1 from './pages/spotlight/ServicesSection1'
import Special from './pages/Special'
import BlogSection from './pages/BlogSection'
import Contactus from './pages/cms/Contactus'
import GoToTopButton from './pages/GoToTopButton'
import ScrollToTop from './pages/ScrollToTop'

function App() {

  

  return (
    <>
  <ScrollToTop />
     <Routes>
      < Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/treatments" element={<ServicesSection1 showLayout={true}/>}/>
      <Route path="/specialists" element={<Special />}/>
      <Route path="/blog" element={<BlogSection  showLayout={true} />}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path="/pricing" element={<PricingSection showLayout={true}/>}>
      </Route>
     </Routes>
     
  <GoToTopButton />
    </>
  )
}

export default App
