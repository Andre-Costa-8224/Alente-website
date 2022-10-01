import "./index.css";
import { Link } from "react-router-dom";
import mari from "../../Imagens/mari.jpg";
import renata from "../../Imagens/renata.jpg";
import seashells from "../../Imagens/logosasells.png";
import descartex from "../../Imagens/logodescartex.png";
import energia from "../../Imagens/logoenergiapopulardobrasil.png";
import sir from "../../Imagens/logosirinvestimentos.png";

const Carrossel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block bebe1 alturaimg w-100">
              <p>
                JUNTOS SOMOS MAIS FORTES!
                <br />
                <Link to="/comofunciona" className="linkcarousel">
                  Entenda como nós funcionamos →
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block bebe2 alturaimg w-100">
              <p>
                PROGRAMAS DE ATENDIMENTO
                <br />
                <Link to="/programas" className="linkcarousel">
                  Saiba mais →
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="imagemcarousel">
              <div className="d-block marcalogoseio alturaimg w-50">
                <p className="marcalogoseiotxt">
                  DOAÇÃO DE LEITE
                  <br />
                  <Link to="/doacoes" className="linkcarousel">
                    Saiba mais →
                  </Link>
                </p>
              </div>
              <div className="d-block maeamamentando w-50 alturaimg"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="imagemcarousel">
              <div className="d-block marcalogoseio alturaimg w-50">
                <p className="marcalogoseiotxt">
                  ENTRE PARA A FAMÍLIA ALENTE
                  <br />
                  <Link to="/cadastro" className="linkcarousel">
                    Saiba mais →
                  </Link>
                </p>
              </div>
              <div className="d-block w-50 bebesegurandodedo alturaimg"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="imagemcarousel">
              <div className="d-block marcalogoseio w-100 alturaimg">
                <p className="marcalogoseio-title">Idealizadoras do projeto</p>
                <div className="marcalogoseio-mari-renata">
                  <img src={mari} className="Mari" alt="Mari" />
                  <img src={renata} alt="Renata" />
                </div>
                <p className="marcalogoseio-mari-renata">
                  <span className="Mari">Mari</span>
                  <span id="renata">Renata</span>
                </p>
                <p className="imglogostitle">Parceiros que confiam na gente</p>
                <div className="imglogos">
                  <img src={seashells} id="seashells" alt="seashells" />
                  <img
                    src={descartex}
                    style={{ marginLeft: "4%" }}
                    alt="descartex"
                  />
                  <img
                    src={energia}
                    style={{ marginLeft: "4%" }}
                    alt="energia popular do Brasil"
                  />
                  <img
                    src={sir}
                    style={{ marginLeft: "4%" }}
                    alt="Sir investimentos"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
