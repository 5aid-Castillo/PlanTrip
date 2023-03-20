import Navbar from './components/layout/Navbar';
import Home from './views/Home';
import Popular from './pages/Popular';
import Offers from './pages/Offers';
/* import About from './pages/About'; */
import Blog from './pages/Blog';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Home /> 
        <Popular />
        <Offers />
       {/*  <About /> */}
        <Blog />
        <Footer /> 
    </div>
  );
}

export default App;
