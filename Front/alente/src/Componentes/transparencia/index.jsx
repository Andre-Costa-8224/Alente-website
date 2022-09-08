import "./index.css";

const Transparencia = () => {

  const dados = {
    titulos: [
      "Pessoal",
      "Administrativo",
      "Comunicação",
      "Atividades",
      "Patrocinio e Apoio",
      "Doadores Pf e Pj",
      "Geracao de Renda",
    ],
    dados: [
      12, 23, 34, 45, 56, 67, 78
    ]
  }

  return(
    <div className="M05">
	<h1 id="titulo">Transparencia</h1>
	<section id="dados">
	  {
	    dados.titulos.map((e, n) => <p><strong>{e}</strong>: {dados.dados[n]}</p>)
	  }
	</section>
	<section id="graficos">
	  
	</section>
    </div>
  );
};

export default Transparencia;
