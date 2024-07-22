
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies"
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Genre from './components/Genre/Genre';
import MovieInformation from './components/MovieInformation/MovieInformation';

function App() {


  return (
   <main>
  
    <Router>
    <Navbar />
      <Routes>
        <Route path = '/' element = {<Movies /> } />
        <Route path ='/genre' element= {<Genre />} />
        <Route path ='/MovieInformation' element= {<MovieInformation />} />
         <Route path="/genre/:id" element={<Genre />}></Route>
      </Routes>

    </Router>
   </main>
  )//
}

export default App
