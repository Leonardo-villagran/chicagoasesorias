export default function Empresa() {

  const imagen1 = './images/1.png';

  return (
    <div className="row mt-3">
    <div className="col-md-8">
      <div className="card h-100">
        <div id='empresa'>
          <h1 className="text-white izquierda ps-3">Nuestra Empresa</h1>
          <p>Chicago y Asociados es una consultora de asesorías legales de abogados con amplia experiencia en el mercado. Desde nuestra fundación, hemos brindado servicios legales de alta calidad a nuestros clientes, ayudándolos a resolver sus problemas y alcanzar sus objetivos. Nos enorgullece ser reconocidos por nuestra ética de trabajo, integridad y profesionalismo.</p>
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


