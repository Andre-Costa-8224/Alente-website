import { Link } from "react-router-dom";
import "./index.css";
import ModalInf from "./Modal";
import { useState } from "react";

const Parceiros = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="divparceiros">
      <section id="txtparceiros">
        <h1>SEJA NOSSO PARCEIRO!</h1>
        <article>
          <p>
            Sua contribuição torna a Alente Capaz de realizar melhoras nos
            programas de atendimentos para contemplar com qualidade centenas de
            famílias que precisam de assistência na amamentação. (outro
            parágrafo) Faça a diferença, juntos fazemos a força #SejaAlente.
          </p>
        </article>
      </section>
      <section id="formparceiros">
        <form>
          <h1>Inscreva-se</h1>
          <label>
            <input type="text" placeholder="Nome" />
          </label>
          <label>
            <input type="email" placeholder="Email" />
          </label>
          <label>
            <input type="tel" placeholder="Telefone" />
          </label>
          <label>
            <input type="text" placeholder="Endereço" />
          </label>
          <label>
            <input type="number" placeholder="CNPJ" />
          </label>
          <label>
            <input type="checkbox" />
            <span>Aceito </span>
            <a href="">Termos e condições</a>
          </label>
          <div id="botaoenviar">
            <input
              onClick={() => handleOpen()}
              className="btn fontetomrosaescuro"
              value="ENVIAR"
              type="button"
            />
          </div>
        </form>
      </section>
      {open ? <ModalInf open={open} handleClose={handleClose} /> : ""}
    </div>
  );
};

export default Parceiros;
