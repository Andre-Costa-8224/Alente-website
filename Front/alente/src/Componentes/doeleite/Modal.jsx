import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import msg from "../../Imagens/mensagem-recebida.png";
import emailjs from "@emailjs/browser";

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const btnstyle = {
  bgcolor: "white",
  color: "#B58281",
  border: "1px solid #B58281",
  marginRight: "5px",
};

const ChildModal = (props) => {

  return (
    <>
      <Modal
        hideBackdrop
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle} className="fontetomrosaescuro">
          <Typography id="modal-modal-title" sx={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", marginBottom: "5%"}} component="h2">
            <img src={msg} style={{maxWidth: "12%"}} alt="mensagem-recebida" />
            <h2>Achou interessante?!</h2>
          </Typography>
          <Typography
            id="child-modal-description"
            component="p"
            className="backgroundamarelado"
            sx={{ padding: "3%" }}
          >
            <p>Em breve você receberá um email com mais informações</p>
          </Typography>
          <Button
            onClick={props.handleClose}
            sx={{ marginLeft: "80%", marginTop: "3%" }}
          >
            Voltar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

const ModalInf = (props) => {

  const [openChild, setOpenChild] = useState(false);
  const handleOpenChild = () => setOpenChild(true);
  const handleCloseChild = () => setOpenChild(false);

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
      handleOpenChild()
  }

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxstyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
            className="fontetomrosaescuro"
          >
            Contate-nos!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, padding: "5px" }}
            className="backgroundamarelado"
          >
            <form className="form-modal" ref={form} onSubmit={enviarEmail} >
              <fieldset>
                <div>
                  <input type="text" required name="nome" placeholder="nome" />
                </div>
                <div>
                  <input type="date" required name="data" />
                </div>
                <div>
                  <input type="email" required name="email" placeholder="email" />
                </div>
                <div>
                  <input type="text" required name="endereco" placeholder="endereço" />
                </div>
                <div>
                  <input type="tel" required name="telefone" placeholder="telefone" />
                </div>
                <div>
                  <input type="number" required name="cep" placeholder="cep" maxLenght={8} />
                </div>
                <input type="text" value={"Desejo contribuir com a doação de leite"} style={{display: "none"}} name="mensagem"/>
              </fieldset>
              <br />
              <div style={{ display: "flex", justifyContent: "right" }}>
                <button
                  className="btn fontetomrosaescuro"
                  style={{ marginRight: "4%"}}
                  onClick={props.handleClose}
                >
                  Voltar
                </button>
                <input
                  type="submit"
                  className="btn btntomrosaescuro"
                  value="Enviar"
                />
              </div>
              {handleOpenChild ? (
                <ChildModal open={openChild} handleClose={handleCloseChild} />
              ) : (
                ""
              )}
            </form>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalInf;
