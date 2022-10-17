import "./Modal.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { InlineWidget } from "react-calendly"

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
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


const ModalProgramas = (props) => {
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
            sx={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="fontetomrosaescuro"
          >
            Agende um atendimento!
          </Typography>
          <InlineWidget
            iframeTitle="Calendly Scheduling Page"
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideGdprBanner: true,
              hideLandingPageDetails: false,
              primaryColor: '00a2ff',
              textColor: '4d5055'
            }}
            prefill={{
              customAnswers: {
                a1: 'a1',
                a10: 'a10',
                a2: 'a2',
                a3: 'a3',
                a4: 'a4',
                a5: 'a5',
                a6: 'a6',
                a7: 'a7',
                a8: 'a8',
                a9: 'a9'
              },
              date: new Date('2022-10-13T17:14:10.301Z'),
              email: 'test@test.com',
              firstName: 'Jon',
              guests: [
                'janedoe@example.com',
                'johndoe@example.com'
              ],
              lastName: 'Snow',
              name: 'Jon Snow'
            }}
            styles={{
              height: '70vh',
              minWidth: "25vw"
            }}
            url="https://calendly.com/acmesales"
            utm={{
              utmCampaign: 'Spring Sale 2019',
              utmContent: 'Shoe and Shirts',
              utmMedium: 'Ad',
              utmSource: 'Facebook',
              utmTerm: 'Spring'
            }}
          />
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

export default ModalProgramas;
