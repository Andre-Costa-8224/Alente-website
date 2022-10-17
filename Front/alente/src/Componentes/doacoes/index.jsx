import "./index.css";
import ModalInf from "./Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Doacoes = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section style={{textAlign: "center", margin: "5% auto 5% auto"}}>
        <p className="alert alert-warning">
          Funcionalidade em andamento!
        </p>
        <p style={{fontWeight: "bold"}}>Caso tenha interesse contate-nos pelo <a href="https://wa.me/351920455154" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
      </section>
      <section className="corpo">
        <article id="arttxt">
          <h1>
            nada é mais belo do que estender a mão para o próximo e alegrar um
            coração necessitado. Seja o motivo do Sorriso de alguém!
          </h1>
        </article>
        <article className="artform">
          <h1>A Alente precisa de você. Adote essa ideia e #SejaAlente!</h1>
          <form>
            <br />
            <label style={{ marginLeft: "5%" }}>Escolha uma opção:</label>
            <br />
            <select
              id="optselect"
              style={{ padding: "2%" }}
              className="marginauto"
            >
              <option value="mensal">Mensal</option>
              <option value="anual">Anual</option>
            </select>
            <div id="input-option">
              <div class="radio">
                <label>
                  <input type="radio" name="opt" value="20" />
                  <span>R$ 20,00</span>
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="opt" value="40" />
                  <span>R$ 40,00</span>
                </label>
              </div>
              <div class="radio">
                <label>
                  <input type="radio" name="opt" value="60" />
                  <span>R$ 60,00</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="opt" value="80" />
                  <span>R$ 80,00</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="opt" value="100" />
                  <span>R$ 100,00</span>
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="opt" value="150" />
                  <span>R$ 150,00</span>
                </label>
              </div>
            </div>
            <div id="outrovalor">
              <label>
                <input type="number" placeholder="outro valor" />
              </label>
            </div>
            <div id="termseconds">
              <label id="check">
                <input type="checkbox" />
                <Link to={"/termosecondicoes"} target="_blank">Aceito termos e condições</Link>
              </label>
            </div>
            <br />
            <div className="doar">
              <input
                type="button"
                className="btn"
                onClick={() => handleOpen()}
                value="Doar"
              />
            </div>
          </form>
        </article>
        {handleOpen ? <ModalInf open={open} handleClose={handleClose} /> : ""}
      </section>
    </>
  );
};

export default Doacoes;
