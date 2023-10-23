const HeroSection = () => {
  
  const heroImage= './images/hero.jpg';
  
  return (
    <div id="home">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }}></div>
            <div className="hero-text">
              <h1>Chicago y Asociados</h1>
              <h2>Expertos en Asesoría Legal</h2>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
