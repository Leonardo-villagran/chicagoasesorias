const ServiciosAdicionales = () => {
    return (
        <div id="servicios" className="card mt-3" >
            <h1 className="text-white izquierda ps-3">Servicios Adicionales</h1>
            <div className="card-body">
                
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="card interna border-0 h-100"> {/* Agrega la clase 'h-100' para que todos los cards tengan la misma altura */}
                            <div className="card-body" >
                                <h2 className="text-white">Asesoría Fiscal</h2>
                                <p>
                                    Ofrecemos asesoría fiscal a empresas y particulares, brindando soluciones personalizadas para optimizar la situación fiscal de nuestros clientes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4">
                        <div className="card interna border-0 h-100"> {/* Agrega la clase 'h-100' para que todos los cards tengan la misma altura */}
                            <div className="card-body">
                                <h2 className="text-white">Asesoría Laboral</h2>
                                <p>
                                    Brindamos asesoría laboral a empresas, ofreciendo apoyo en la gestión de recursos humanos, contratación y despidos, y resolución de conflictos laborales.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4">
                        <div className="card interna border-0 h-100"> {/* Agrega la clase 'h-100' para que todos los cards tengan la misma altura */}
                            <div className="card-body">
                                <h2 className="text-white">Asesoría Mercantil</h2>
                                <p>
                                    Proporcionamos asesoría mercantil a empresas, ofreciendo apoyo en fusiones y adquisiciones, derecho de sociedades y contratos mercantiles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiciosAdicionales;

