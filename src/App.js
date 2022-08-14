import './App.css';
import Hero from "./components/Hero"
import Programs from "./components/Programs/Programs"
import Reasons from "./components/Reasons/Reasons"
import Plan from "./components/Plan/Plan"
import Testimonials from "./components/Testimonials/Testimonials"


function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plan/>
          <Testimonials/>
    </div>
  );
}

export default App;
