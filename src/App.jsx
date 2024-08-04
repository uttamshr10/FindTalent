import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigation from "./component/Navigation"
import Footer from './component/Footer'
import Home from "./component/Home"
import About from "./component/About"
import Contact from './component/Contact'
import NotFound from "./component/NotFound"
import UserProvider from "./component/context/UserContext"
import AlertProvider from "./component/context/AlertContext"
import Alert from "./component/Alert"
import User from './component/User'

function App(){
  return (
  <AlertProvider>
    <UserProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
          <Navigation />
          <main className="container mx-auto px-3 pb-12">
            <Alert />
            <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="/about" element = {<About />} />
              <Route path="/user/:login" element = {<User />} />
              <Route path="/contact" element = {<Contact />} />
              <Route path="/*" element = {<NotFound />} />
              <Route path="/notfound" element = {<NotFound />} />
            </Routes>
          </main>
          <Footer />
          </div>
        </Router>
        </UserProvider>
      </AlertProvider>
    
  )
}

export default App