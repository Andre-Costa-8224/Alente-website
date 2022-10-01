import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
          <Typography id="modal-modal-title" component="h2">
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

  const submit = (e) => {
    e.preventDefault();
  };

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
            <form className="form-modal" onSubmit={submit}>
              <fieldset>
                <div>
                  <input type="text" placeholder="nome" />
                </div>
                <div>
                  <input type="date" />
                </div>
                <div>
                  <input type="email" placeholder="email" />
                </div>
                <div>
                  <input type="text" placeholder="endereço" />
                </div>
                <div>
                  <input type="tel" placeholder="telefone" />
                </div>
                <div>
                  <input type="number" placeholder="cep" maxLenght={8} />
                </div>
              </fieldset>
              <br />
              <div style={{ display: "flex", justifyContent: "right" }}>
                <button
                  className="btn fontetomrosaescuro"
                  style={{ marginRight: "2%" }}
                  onClick={props.handleClose}
                >
                  Voltar
                </button>
                <input
                  type="submit"
                  className="btn btntomrosaescuro"
                  value="Enviar"
                  onClick={() => handleOpenChild()}
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
