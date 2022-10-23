import "./index.css";
import { Chart } from "react-google-charts";
import { useState } from "react";

const Transparencia = () => {
  const dados = {
    titulos: [
      "Pessoal",
      "Administrativo",
      "Comunicação",
      "Atividades",
      "Patrocinio e Apoio",
      "Doadores Pf e Pj",
      "Geração de Renda",
    ],
    dados: [12, 23, 34, 45, 56, 67, 78],
  };

  const [receitas, setReceitas] = useState({
    title: "Receitas",
  });

  const [data1, setData1] = useState([
    ["Receitas", "Quantidade"],
    ["Patrocínios", 133],
    ["Doadores", 100],
    ["Geração de Renda Própria", 80],
  ]);

  const [despesas, setDespesas] = useState({
    title: "Despesas",
  });

  const [data2, setData2] = useState([
    ["Despesas", "Quantidade"],
    ["Pessoal", 120],
    ["Administrativo", 137],
    ["Comunicação", 82],
    ["Atividades", 68],
  ]);

  return (
    <div className="M05">
      <h1 id="titulo">Transparencia</h1>
      <section id="dados">
        {dados.titulos.map((e, n) => (
          <div>
            {n < 5 ? (
              <p>
                <strong>{e}</strong>: {dados.dados[n]}
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
        {dados.titulos.map((e, n) => (
          <div>
            {n >= 5 ? (
              <p>
                <strong>{e}</strong>: {dados.dados[n]}
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
      </section>
      <section id="graficos">
        <article id="selectebtn">
          <div>
            <select style={{backgroundColor: "white", borderRadius: "2%"}} id="filtro" name="">
              <option value="">Filtre por ano</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div>
            <button className="btn btntomrosaescuro">Baixar balanço patrimonial</button>
          </div>
        </article>
        <article id="graficosarticle">
          <div>
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              data={data1}
              options={receitas}
            />
          </div>
          <div>
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              data={data2}
              options={despesas}
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Transparencia;
