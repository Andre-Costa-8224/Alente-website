import "./index.css";
import nutricionista from "../../Imagens/nutricionista.jpg";
import bebemamando from "../../Imagens/bebemamando.jpg";
import mulhercozinhando from "../../Imagens/mulhercozinhando.jpg";
import mulhernanatureza from "../../Imagens/mulhernanatureza.jpg";

const Programas = () => {

  const titulos = ["Consultoria de Amamentação", "Nutricionista", "Chef Especialista em Alimentação Saudável", "Cuidado com a Saúde Mental"];
  const textos = [1,2,3,4];
  const imagens = [bebemamando,nutricionista,mulhercozinhando,mulhernanatureza];

  return(
    <>
      <section>
	{
	  titulos.map((item, value) => {
	    return(
		<article style={value%2===0 ? {backgroundColor: "#F4EED8"} : {backgroundColor: "white"}} className="artigoprograma">
		  <div id="txtdiv">
		    <div>
		      <h1 key={value}>
		        {item}
		      </h1>
		      <p>
		        {textos[value]}
		      </p>
		    </div>
		    <div id="btnagendamento">
		      <button className="btntomrosaescuro btn">AGENDE UM ATENDIMENTO</button>
		    </div>
		  </div>
		  <img src={imagens[value]} alt={imagens[value]+"..."}/>
		</article>
	  )})
	}
      </section>
    </>
  )
}

export default Programas;
