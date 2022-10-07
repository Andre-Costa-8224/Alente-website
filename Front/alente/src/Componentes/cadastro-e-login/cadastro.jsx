import { Link } from "react-router-dom";
import "./index.css";

const Cadastro = () => {
  //JavaScript aqui se precisar
  return (
    <main className="altura cadpage">
      <br />
      <fieldset className="formcad">
        <form>
          <h1>Cadastre-se</h1>
          <div className="form-floating">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="your name"
                required
              />
              <label for="floatingName">Nome</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingProfissao"
                placeholder="Sua profissão"
                required
              />
              <label for="floatingProfissao">Profissão</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control birthinput"
                id="floatingBirth"
                placeholder="your birthday"
                required
              />
              <label for="floatingBirth">Nascimento</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="floatingPhone"
                placeholder="your phone number"
                required
              />
              <label for="floatingPhone">Seu telefone</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="your email"
                required
              />
              <label for="floatingEmail">Seu email</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="txtarea"
                rows="5"
                required
                placeholder="A família alente precisa de mãos! conte-nos um pouco sobre como você pode agregar à nossa comunidade"
              ></textarea>
            </div>
            <div className="form-floating mb-3">
              <input
                style={{ marginRight: "5%", width: "100%" }}
                type="checkbox"
                required
                className="inputtermoseconds"
              />

              <Link to={"/termosecondicoes"} target="_blank">
                Aceito termos e condições
              </Link>
            </div>
            <br />
            <div>
              <button id="submit" style={{ color: "white" }} type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </fieldset>
      <section>
        <article style={{ color: "white", fontWeight: "bold" }}>
          <h1>JUNTE-SE A FAMÍLIA ALENTE!</h1>
          <p>
            Pensando em cada detalhe, a nossa comunidade oferece atendimentos
            com profissionais de diversas áreas da saúde, oficinas de bem-estar
            e eventos educacionais.
          </p>
          <p>SUPER SIMPLES!</p>
          <p>
            Basta preencher o campo "cadastro" com seu contato e agendar o dia
            para o encontro virtual com o ACOLHEDOR-ALENTE.
          </p>
          <p>Acolhedor alente?</p>
          <p>SIM!!</p>
          <p>
            Um membro da família alente faz questão de dar boas vindas e
            atendê-lo
          </p>
        </article>
      </section>
    </main>
  );
};

export default Cadastro;
