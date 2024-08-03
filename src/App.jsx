import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigation from "./component/Navigation"
import Footer from './component/Footer'
import Home from "./component/Home"
import About from "./component/About"
import Contact from './component/Contact'
import NotFound from "./component/NotFound"
import DataContext from "./component/DataContext"
import AlertProvider from "./component/context/AlertContext"
import Alert from "./component/Alert"

function App(){
  return (
    <DataContext>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
          <Navigation />
          <main className="container mx-auto px-3 pb-12">
            <Alert />
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
      </AlertProvider>
    </DataContext>
    
  )
}

export default App