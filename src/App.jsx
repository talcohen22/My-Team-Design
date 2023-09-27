import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AppHeader } from "./cmps/AppHeader";
import { TeamIndex } from "./views/TeamIndex";
import { About } from "./cmps/About";
import { Home } from "./cmps/Home";
import { Contact } from "./cmps/Contact";


export function App() {

  return (
    <div className="app-layout">
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <TeamIndex />

      </Router>
    </div>
  )
}