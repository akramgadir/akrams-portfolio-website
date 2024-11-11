import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Tech, Feedbacks, Hero, Navbar, Works, StarsCanvas} from './components'
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfService from "./components/TermsOfService"

const App = () => {

  return (
<BrowserRouter>
<div className ='relative z-0 bg-primary'>
  <div className = 'bg-hero-pattern bg-cover bg-no-repeat bg-center'>
<Navbar/>
<Hero/>
  </div>
  <About />
  <Experience />
  <Tech />
  <Works />
  <Feedbacks />
  <div className="relative z-0">
    <Contact />
    <StarsCanvas />
  </div>
</div>
<Route path="/easprivacypolicy" element={<PrivacyPolicy />} />
<Route path="/eastermsofservice" element={<TermsOfService />} />
</BrowserRouter>

  )
}

export default App
