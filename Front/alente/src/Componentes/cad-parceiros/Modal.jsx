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
  color: "white",
  bgcolor: "#B58281",
  border: "1px solid #B58281",
  marginRight: "5px",
};

const ModalInf = (props) => {
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
            className="fontetomrosaescuro"
          >
            Obrigado por se juntar a essa linda família!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, padding: "5px" }}
            className="backgroundamarelado"
          >
            Em breve você receberá um email com mais informações da parceria!
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button onClick={props.handleClose} sx={btnstyle}>
              Voltar
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalInf;
