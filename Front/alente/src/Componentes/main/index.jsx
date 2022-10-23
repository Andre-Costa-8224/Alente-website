import "./index.css";
import { Link } from "react-router-dom";
import mari from "../../Imagens/mari.svg";
import renata from "../../Imagens/renata.svg";
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
            <div className="bebe1 alturaimgbranco w-100">
              <p>
                JUNTOS SOMOS MAIS FORTES!
                <br />
                <Link to="/comofunciona" className="linkcarouselbranco">
                  Entenda como nós funcionamos →
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className=" bebe2 alturaimgbranco w-100">
              <p>
                PROGRAMAS DE ATENDIMENTO
                <br />
                <Link to="/programas" className="linkcarouselbranco">
                  Saiba mais →
                </Link>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="imagemcarousel">
              <div className=" marcalogoseio alturaimgrosa w-50">
                <p className="marcalogoseiotxt linkcarouselrosa">
                  DOAÇÃO DE LEITE
                  <br />
                  <Link to="/doeleite" className="">
                    Saiba mais →
                  </Link>
                </p>
              </div>
              <div className="d-block maeamamentando w-50 alturaimg"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="imagemcarousel">
              <div className="marcalogoseio alturaimgrosa linkcarouselrosa w-50">
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
              <div className=" marcalogoseio linkcarouselrosa w-100 alturaimgrosa">
                <p className="marcalogoseio-title">Idealizadoras do projeto</p>
                <div id="marirenatacontainer">
                <div className="displaymr">

                  <img src={mari} id="" alt="Mari" />
                  <span id="">Mari</span>

                </div>

                <div className="displaymr">

                  <img src={renata} alt="Renata" />
                  <span id="">Renata</span>

                </div>
                  </div>
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
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
