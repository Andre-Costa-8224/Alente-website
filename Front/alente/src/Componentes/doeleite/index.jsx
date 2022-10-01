import EastSharpIcon from "@mui/icons-material/EastSharp";
import "./index.css";
import { useState } from "react";
import ModalInf from "./Modal";

const DoeLeite = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="fontetomrosaescuro">
        <h1 style={{ textAlign: "center", marginTop: "2%" }}>
          Doação de leite
        </h1>
        <article id="textodeapoio">
          <p style={{ textAlign: "justify", margin: "auto 1% 2% 1%" }}>
            A consultora de amamentação exerce um papel acolhedor para com a
            mulher, visando orientá-la da melhor forma possível para que consiga
            o sucesso da amamentação. As mães serão direcionadas, dentro da
            plataforma virtual, visando orientá-la para que consiga o sucesso da
            amamentação. As mães serão direcionadas, dentro da plataforma
            virtual, aos grupos educacionais correspondente.
          </p>
        </article>
        <article id="imagemdefundo">
          <button
            className="fontetomrosaescuro btn"
            onClick={() => handleOpen()}
          >
            Contate-nos{" "}
            <span>
              <EastSharpIcon />
            </span>
          </button>
        </article>
        {handleOpen ? <ModalInf open={open} handleClose={handleClose} /> : ""}
      </section>
    </>
  );
};

export default DoeLeite;
