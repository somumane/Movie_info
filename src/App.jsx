import React from "react";
import BollyWoodMovie from "./components/BollyWoodMovie";
 import Navbar from "./components/Navbar";
import {Route,Routes} from 'react-router-dom'
import HollyWoodMovie from "./components/HollyWoodMovie";
import Movies from "./components/Movies";
import Upcoming from "./components/Upcoming";
import Home from "./components/Home";
import Fotter from "./components/Fotter";
import "./App.css";

const App = () => {
  return (
    
  <div>
  <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="bollywoodold" element={<BollyWoodMovie/>}/>
   <Route path="hollywoodold" element={<HollyWoodMovie/>}/>
   <Route path="movies" element={<Movies/>}/>
   <Route path="upcoming" element={<Upcoming/>}/>
   </Routes>
   <Fotter/>
   </div>
  )
}

export default App
