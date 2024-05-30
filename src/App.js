import { BrowserRouter, Routes,Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import ListeArtisans from '../src/components/ListeArtisans';
import FicheArtisan from '../src/components/FicheArtisan';
import Page404 from '../src/components/Page404';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/batiment' element={<ListeArtisans category="Bâtiment" />} />
          <Route path='/fabrication' element={<ListeArtisans category="Fabrication" />} />
          <Route path='/services' element={<ListeArtisans category="Services" />} />
          <Route path='/alimentation' element={<ListeArtisans category="Alimentation" />} />
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
