import "./index.css";

const Perfil = () => {
  let cardsimgs = [];

  let cardstitle = [
    "Agendamentos",
    "Editar Perfil",
    "Relatório de doações",
    "Ebooks",
    "Palestras",
    "Eventos",
  ];

  let cardsmain = [
    "Confiro seus agendamentos nos nossos programas!",
    "Altere seus dados!",
    "Acompanhe suas doações realizadas!",
    "Acesse ebooks de nossos cursos!",
    "Reveja palestras anteriores!",
    "Acompanhe a agenda de eventos futuros!",
  ];

  let cardsbuttons = [
    "Conferir",
    "Editar",
    "Acompanhe",
    "Acesse",
    "Reveja",
    "Acompanhe",
  ];

  return (
    <section id="secao">
      <article id="cards">
        {cardstitle.map((data, n) => (
          <div>
            <img src="" alt="" />
            <h2>{data}</h2>
            <p style={{ width: "50%", marginLeft: "25%" }}>{cardsmain[n]}</p>
            <button disabled className="btn btntomrosaescuro">
              {cardsbuttons[n]}
            </button>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Perfil;
