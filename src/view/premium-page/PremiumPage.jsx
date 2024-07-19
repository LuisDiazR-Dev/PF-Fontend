import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom"
import styles from './PremiumPage.module.css';

const image1Url = 'https://i.ibb.co/tYfrgKG/portfolio.png';
const image2Url = 'https://i.ibb.co/s51rcjF/Proyect-Proposal.png';
const image3Url = 'https://i.ibb.co/k265XpZ/imagen3.png';

const PremiumPage = () => {
  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
      carousel.setAttribute('data-bs-interval', '5000');
    }
  }, []);

  return (
    <div>
      <header className={`${styles.heroSection} d-flex align-items-center justify-content-center`}>
        <div className="container text-center text-white">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-3">Potencia tu carrera con ForDevs Pro</h1>
              <p className="lead">
                0 % de tarifas de la plataforma, más funciones para que tu carrera creativa crezca y dar más visibilidad a tus proyectos.
              </p>
              <Link to="/register" className="btn btn-primary">
                Probar versión gratuita
              </Link>
            </div>
            <div className="col-md-6">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={image1Url} className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={image2Url} className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={image3Url} className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Muestra tu trabajo en tu propio sitio web</h2>
            <p>Publica hasta 5 sitios.</p>
            <p>Importa tu trabajo desde ForDevs al instante</p>
          </div>
          <div className="col-md-6">
            <img src={image1Url} className="img-fluid" alt="Imagen adicional 1" />
          </div>
        </div>
      </section>
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Gana más dinero en ForDevs</h2>
            <p>0 % de tarifas de plataforma en ForDevs para ventas de recursos</p>
            <p>0 % de tarifa de la plataforma ForDevs para autónomos y sus clientes</p>
            <p>0 % de tarifas de plataforma en ForDevs para suscripciones</p>
          </div>
          <div className="col-md-6">
            <img src={image2Url} className="img-fluid" alt="Imagen adicional 2" />
          </div>
        </div>
      </section>
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Testimonios</h2>
            <p>Descubre cómo nuestros servicios han transformado la experiencia de nuestros usuarios.
            Sus testimonios reflejan el impacto positivo que hemos logrado juntos.</p>
          </div>
          <div className="col-md-6">
            <img src={image3Url} className="img-fluid" alt="Imagen adicional 3" />
          </div>
        </div>
      </section>
      <section className="text-center mt-5 mb-5">
        <h1 className="display-4">Empieza la prueba gratuita de 7 días</h1>
        <p className="lead">Lleva tus proyectos al siguiente nivel con ForDevs Pro.</p>
        <div className="cards-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">ForDevs</h5>
                    <div className="card-text">
                      <p>Publica tus proyectos</p>
                      <p>Ofrece servicios autónomos</p>
                      <p>Envía propuestas a clientes</p>
                      <p>Vende tus recursos</p>
                      <p>Márcate como disponible para trabajar</p>
                      <p>Accede a nuestra bolsa de trabajo autónomo y a tiempo completo</p>
                      <p>Realiza transacciones en ForDevs con tarifas de plataforma del 15 al 30 %</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">ForDevs Pro</h5>
                    <div className="card-text">
                      <p>Publica tus proyectos</p>
                      <p>Ofrece servicios como freelance</p>
                      <p>Envía propuestas a clientes</p>
                      <p>Vende tus recursos</p>
                      <p>Marca tu disponibilidad para trabajar</p>
                      <p>0% de tarifa de la plataforma ForDevs</p>
                      <p>Proyectos protegidos por el seguro de calidad ForDevs</p>
                      <p>Ganancias transferidas automáticamente</p>
                      <p>Cuota de inscripción 20% más barata</p>
                      <p>Tienes acceso a la bolsa de trabajo freelance</p>
                      <p>Accede a la bolsa de trabajo de tiempo completo</p>
                      <p>Realiza transacciones en ForDevs</p>
                    </div>
                    <Link to="/subscription" className="btn btn-primary">Probar versión Pro</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PremiumPage;
