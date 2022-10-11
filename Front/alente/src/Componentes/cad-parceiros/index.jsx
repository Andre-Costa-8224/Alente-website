import { Link } from "react-router-dom";
import "./index.css";
import ModalInf from "./Modal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Parceiros = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const form = useRef();

  const enviarEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      'service_k198qoi',
      'template_l6a3h08',
      form.current,
      'Dad6_Pl4O23-zNBBH'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
      handleOpen()
  }

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
        <form ref={form} onSubmit={enviarEmail}>
          <h1>Inscreva-se</h1>
          <label>
            <input type="text" required placeholder="Nome" name="nome" />
          </label>
          <label>
            <input type="email" required placeholder="Email" name="email" />
          </label>
          <label>
            <input type="tel" required placeholder="Telefone" name="telefone" />
          </label>
          <label>
            <input type="text" required placeholder="Endereço" name="endereco" />
          </label>
          <label>
            <input type="number" required placeholder="CNPJ" name="cnpj" />
          </label>
          <label>
            <input type="checkbox" required />
            <span>Aceito </span>
            <Link to={"/termosecondicoes"} target="_blank">Termos e condições</Link>
          </label>
          <div id="botaoenviar">
            <input
              
              className="btn fontetomrosaescuro"
              value="ENVIAR"
              type="submit"
            />
          </div>
        </form>
      </section>
      {open ? <ModalInf open={open} handleClose={handleClose} /> : ""}
    </div>
  );
};

export default Parceiros;
