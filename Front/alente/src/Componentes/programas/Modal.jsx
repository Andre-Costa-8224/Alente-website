import "./Modal.css"
import {useState} from "react";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const boxstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const btnstyle = {
  bgcolor: 'white',
  color: '#B58281',
  border: '1px solid #B58281',
  marginRight: '5px'
};


const date = new Date()
const min = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();

const ModalProgramas = (props) => {
  
  return(
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={boxstyle}>
          <Typography sx={{textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2" className="fontetomrosaescuro">
            Agende um atendimento!
          </Typography>
          <Typography id="modal-modal-description" sx={ { mt: 2, padding: '25px' }} className="backgroundamarelado">
            <form id="formularioagenda">
	      <label id="labelprogramas">
		<select name="programas">
		  <option value="Consultoria de Amamentação">Consultoria de Amamentação</option>
		  <option value="Nutricionista">Nutricionista</option>
		  <option value="Chef Especialista em Alimentação Saudável">Chef Especialista em Alimentação Saudável</option>
		  <option value="Cuidado com a Saúde Mental">Cuidado com a Saúde Mental</option>
		</select>
	      </label>
	      <label id="data">
		<input type="date" id="dia" required />
	      </label>
	      <label id="horario">
		<input type="time" required placeholder="horario"/>
	      </label>
	      <label>
		<input type="checkbox" required/>
		<span>Aceito <a href="#">termos e condições</a></span>
	      </label>
	      <div>
		<input type="submit" className="btn btntomrosaescuro" value="Agendar"/>
	      </div>
	    </form>
          </Typography>
	  <br/>
	  <div style={{display: "flex", justifyContent: "right"}}>
	    <Button onClick={props.handleClose} sx={btnstyle}>Voltar</Button>
	  </div>
        </Box>
      </Modal>
    </>
  )
}

export default ModalProgramas;
