import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './views/Header';
import Menu from './views/Menu';
import ScrollButton from './components/ScrollButton';
import Empresa from './views/Empresa';

import Home from './views/Home';
import Areas from './views/Areas';
import Servicios from './views/Servicios';
import Contacto from './views/Contacto';
import Footer from './views/Footer';
import { motion } from 'framer-motion';

function App() {


  return (

    <div className="container">
      <Header />
      <Menu />
      <motion.div className="card bg-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, type: 'spring' }}

      >
      <Home />
        <Empresa />
        <Areas />
        <Servicios />
        <Contacto />
      </motion.div>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
