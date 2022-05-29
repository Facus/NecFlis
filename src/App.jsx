import './App.css';
import "@fontsource/bebas-neue";
import Navbar from './components/Navbar/Navbar';
import Billboard from './components/Billboard/Billboard';
import Carousel from './components/Carousel/Carousel';
import { apiCategory } from './apiConfig';
import Separator from './components/Separator/Separator';

function App() {
  return (
    <div className="container">
      
      <Navbar />

      <Billboard />

      <Separator height={"30px"} />
      
      <Carousel title="Películas Populares" category={apiCategory.popularMovies}/>

      <Separator height={"30px"} />

      <Carousel title="Películas Mejor Valoradas" category={apiCategory.topRatedMovies}/>

      <Separator height={"30px"} />

      <Carousel title="Programas de TV Populares" category={apiCategory.popularTv}/>

      <Separator height={"30px"} />

      <Carousel title="Programas de TV Mejor Valorados" category={apiCategory.topRatedTv}/>

      <Separator height={"40px"} />

      
      
    </div>
  );
}

export default App;
