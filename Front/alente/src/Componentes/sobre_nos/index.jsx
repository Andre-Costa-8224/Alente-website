import "./index.css";
import { Link } from "react-router-dom";
import seta from "../../Imagens/avancarseta.svg";
import foguete from "../../Imagens/Missao.svg";
import visao from "../../Imagens/Visao.svg";
import valores from "../../Imagens/Valores.svg"

const SobreNos = () => {
  //JavaScript aqui se precisar
  return (
    <>
      <main>
        <section className="secaosobrecima">
          <article>
            <h1 className="tituloart">
              <img
                src={foguete}
                alt="foguete"
              />
              Missão
            </h1>
            <p>
              Promover a lactância e doação de leite, como preconiza a
              Organização Mundial da Saúde (OMS), através da prestação de
              assistência multiprofissional à mulheres gestantes, lactantes e
              seus acompanhantes, e a familiares de recém nascidos órfãos de mãe
              no Brasil.
            </p>
          </article>
          <article className="visao">
            <h1 className="tituloart">
              <img
                src={visao}
                alt="olho"
              />
              Visão
            </h1>
            <p>
              Valorizamos uma assistência à lactância menos burocrática e mais
              humana, visando garantir o cumprimento dos direitos e uma maior
              integração entre os serviços prestados e as necessidades das
              famílias assistidas.
            </p>
          </article>
          <article>
            <h1 className="tituloart">
              <img
                src={valores}
                alt="aperto de mãos"
              />
              Valores
            </h1>
            <p>
              Acreditamos no diálogo horizontal, na atuação com ética e
              reespeito à individualidade sem qualquer forma de
              discriminalização ou utilização institucional político-partidária.
            </p>
          </article>
        </section>
        <section className="secaosobrebaixo">
          <article>
            <h1>Sobre nós</h1>
            <p>
              O Instituto Alente objetiva incentivar e assistir o aleitamento
              materno e a doação de leite humano, além de buscar levar
              informações seguras e prestar assistência às gestantes, lactantes,
              cuidadores e familiares de bebés órfãos a partir de uma rede de
              apoio composta por uma equipe multiprofissional de saúde.
            </p>
          </article>
          <article className="ondetudocomecou">
            <h1>Onde tudo começou</h1>
            <p>
              O Instituto Alente inicialmente nasceu de uma necessidade do banco
              de leite em diversas regiões de pernambuco, principalmente no
              Recife, onde foi detectado uma grande escacez de leite materno
              para bebés prematuros, mães impossibilitadas de amamentar,
              puerperias e afins. Com isso,
            </p>
            <Link className="linkhistoria" to="/historiadeinicio">
              <span>Saiba mais{" "}</span>
              <img
                src={seta}
                alt="seta"
              />
            </Link>
          </article>
        </section>
      </main>
    </>
  );
};

export default SobreNos;
