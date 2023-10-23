export default function Areas() {

  const imagen1 = './images/2.png';

  return (
    <div className="row mt-3">
    <div className="col-md-8 ">
      <div className="card h-100 ">
        <div id='areas'>
          <h1 className="text-white izquierda ps-3">Áreas</h1>
          <div className="text-white">
          <ul className="izquierda">
            <li>Derecho Corporativo y Comercial</li>
            <li>Derecho Laboral y Seguridad Social</li>
            <li>Derecho Civil y de Familia</li>
            <li>Derecho Penal y Procesal Penal</li>
            <li>Derecho Tributario y Fiscal</li>
            <li>Derecho de Propiedad Intelectual y Tecnología</li>
            <li>Derecho Ambiental y Energético</li>
          </ul>
        </div>
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

