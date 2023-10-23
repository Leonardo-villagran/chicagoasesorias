import { motion } from 'framer-motion';
export default function Header() {

    const logo = './images/logo.png';
    const logoTexto = './images/logo_texto.png';

    return (
        <motion.div className="header-banner row"
            initial={{ y: -250, opacity:0}}
            animate={{ y: 0,    opacity:1}}
            transition={{ duration: 0.5, type: 'tween'}}
        >
            <motion.div className="logo-container col-12 col-md-4 d-flex "
                initial={{ }}
                animate={{ }}
            >
                <div className="logo-left">
                    <img src={logo} alt="Logo Izquierdo" />
                </div>
            </motion.div>
            <div className="logo-text-container col-12 col-md-8 d-flex ">
                <img src={logoTexto} alt="Logo Derecho" />
            </div>
    
        </motion.div>
    );
}

