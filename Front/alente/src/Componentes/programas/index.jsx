import "./index.css";
import { useState } from "react";
import ModalProgramas from "./Modal";
import nutricionista from "../../Imagens/nutricionista.jpg";
import bebemamando from "../../Imagens/bebemamando.jpg";
import mulhercozinhando from "../../Imagens/mulhercozinhando.jpg";
import mulhernanatureza from "../../Imagens/mulhernanatureza.jpg";

const Programas = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const titulos = [
    "Consultoria de Amamentação",
    "Nutricionista",
    "Chef Especialista em Alimentação Saudável",
    "Cuidado com a Saúde Mental",
  ];
  const textos = [1, 2, 3, 4];
  const imagens = [
    bebemamando,
    nutricionista,
    mulhercozinhando,
    mulhernanatureza,
  ];
  const altimagens = [
    "bebemamando",
    "nutricionista",
    "mulhercozinhando",
    "mulhernanatureza",
  ]

  return (
    <>
      <section id="programas">
        {titulos.map((item, value) => {
          return (
            <article
              style={
                value % 2 === 0
                  ? { backgroundColor: "#F4EED8" }
                  : { backgroundColor: "white" }
              }
              className="artigoprograma"
            >
              <div id="txtdiv">
                <div>
                  <h1 key={value}>{item}</h1>
                  <p>O Instituto Alente inicialmente nasceu de uma necessidade do banco de leite em diversas regiões de Pernambuco, principalmente no Recife, onde foi detectado uma grande escacez de leite materno para bebês prematuros, mães impossibilitadas de amamentar, puérperias e afins.</p>
                </div>
                <div id="btnagendamento">
                  <button
                    className="btntomrosaescuro btn"
                    onClick={() => handleOpen()}
                  >
                    AGENDE UM ATENDIMENTO
                  </button>
                </div>
              </div>
              <img src={imagens[value]} alt={altimagens[value]} />
            </article>
          );
        })}
      </section>
      {handleOpen ? (
        <ModalProgramas open={open} handleClose={handleClose} />
      ) : (
        ""
      )}
    </>
  );
};

export default Programas;
