import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigation from "./component/Navigation"
import Footer from './component/Footer'
import Home from "./component/Home"
import About from "./component/About"
import Contact from './component/Contact'
import NotFound from "./component/NotFound"


function App(){
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
      <Navigation />
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/*" element = {<NotFound />} />
        </Routes>
      </main>
      <Footer />

      </div>
    </Router>
    
  )
}

export default App