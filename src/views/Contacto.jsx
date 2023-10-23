export default function Empresa() {

  const imagen1 = './images/4.png';

  return (
    <div className="row mt-3">
      <div className="col-md-8">
        <div className="card h-100">
          <div id='contacto' className="text-white">
            <h1 className="izquierda ps-3" >Contacto</h1>
            <ul className="izquierda">
              <li >Para más información sobre nuestros servicios o para programar una consulta, por favor contáctanos:</li>
              <li>Teléfono: +56 99 2265309</li>
              <li>Correo Electrónico: pilar@chicagoasesorias.cl</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100">
          <img src={imagen1} className="card-img-top" alt="Imagen " />
        </div>
      </div>
    </div>
  );
}
