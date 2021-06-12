import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './sass/App.scss';

//Componentes
import Menu from './components/Menu/Menu';
import MenuMovil from './components/MenuMovil/MenuMovil';
import Header from './components/Header/Header';
import Destinos from './components/Destinos/Destinos';
import Galeria from './components/Galeria/Galeria';
import Formulario from './components/Formulario/Formulario';
import Footer from './components/Footer/Footer';

//Paginas
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <Router>
      <Menu />
      <MenuMovil />
      <Switch>
        <Route path="/" exact> <Home /> <Header /> <Destinos /> </Route>
        <Route path="/about" exact> <About /> <Galeria /> </Route>
        <Route path="/contact" exact> <Contact /> <Formulario /> </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
