import './App.css'
import Hero from "./components/Hero"
import Programs from "./components/Programs/Programs"
import Reasons from "./components/Reasons/Reasons"
import Plan from "./components/Plan/Plan"
import Testimonials from "./components/Testimonials/Testimonials"
import JoinUs from "./components/JoinUs/JoinUs"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plan/>
      <Testimonials/>
      <JoinUs/>
      <Footer/>
    </div>
  )
}

export default App
