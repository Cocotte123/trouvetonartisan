import { BrowserRouter, Routes,Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import ListeArtisans from '../src/components/ListeArtisans';
import FicheArtisan from '../src/components/FicheArtisan';
import Page404 from '../src/components/Page404';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() {
 
  const [queryArtisan, setQueryArtisan] = useState("");
 
  const handleChange = (event) => {
        setQueryArtisan(event.target.value);
        
    }


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar handleChange={handleChange} />
        <p>{queryArtisan}</p>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/batiment' element={<ListeArtisans category="Bâtiment" queryArtisan={queryArtisan}/>} />
          <Route path='/fabrication' element={<ListeArtisans category="Fabrication" queryArtisan={queryArtisan}/>} />
          <Route path='/services' element={<ListeArtisans category="Services" queryArtisan={queryArtisan}/>} />
          <Route path='/alimentation' element={<ListeArtisans category="Alimentation" queryArtisan={queryArtisan}/>} />
          <Route path='/artisan' element={<FicheArtisan />}>
            <Route path=':artisanId' element={<FicheArtisan />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
