import { Link } from "react-router-dom";
import "./index.css";
import ModalContato from "./modal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FaleConosco = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const form = useRef();

  const enviarEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      'service_k198qoi',
      'template_dhtoqsn',
      form.current,
      'Dad6_Pl4O23-zNBBH'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <>
      <main className="faleconosco">
        <section className="secaoform">
          <form ref={form} onSubmit={enviarEmail} className="formulario">
            <br />
            <h1 style={{marginTop: "20px"}}>Fale Conosco</h1>
            <div className="form-floating" style={{padding: "30px"}}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  name="nome"
                  placeholder="your name"
                />
                <label for="floatingName">Nome</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingPhone"
                  name="telefone"
                  placeholder="your phone number"
                />
                <label for="floatingPhone">Seu telefone</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  name="email"
                  placeholder="your email"
                />
                <label for="floatingEmail">Seu email</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="txtarea"
                  rows="5"
                  name="mensagem"
                  placeholder="A família alente precisa de mãos! conte-nos um pouco sobre como você pode agregar à nossa comunidade"
                ></textarea>
              </div>
              <div className="form-floating mb-3">
                <input
                  style={{ width: "100%" }}
                  type="checkbox"
                  className="inputtermoseconds"
                />

                <Link to={"/termosecondicoes"} target="_blank">
                  Aceito termos e condições
                </Link>
              </div>
              <br />
              <div style={{width: "100%", margin: "auto"}}>
                <input
                  type="submit"
                  value="Enviar"
                  className="btnenviar"
                  onClick={() => handleOpen()}
                />
              </div>
            </div>
          </form>
          {open ? (
            <ModalContato handleOpen={true} handleClose={handleClose} />
          ) : (
            ""
          )}
        </section>
        <section className="imagem"></section>
      </main>
    </>
  );
};

export default FaleConosco;
