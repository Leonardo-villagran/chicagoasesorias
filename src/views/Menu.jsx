import { motion } from 'framer-motion';

export default function Menu() {
    return (
        <motion.div className="card bg-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}  
            transition={{delay: 0.3, duration: 1, type: 'tween'}}

        >
            <div className="card-body">
                <nav className="hero-nav">
                    <div className="d-flex flex-wrap">
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#home">Home</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#empresa">Nuestra empresa</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#areas">Áreas</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#servicios">Servicios</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#contacto">Contacto</a>
                        <a className="nav-link col-12 col-sm-4 col-md-4 col-lg-2" href="#correo">Correo</a>
                    </div>
                </nav>
            </div>
        </motion.div>


    )
}
