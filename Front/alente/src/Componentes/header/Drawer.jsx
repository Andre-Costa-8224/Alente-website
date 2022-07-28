import {Drawer, List, IconButton, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {

  const [openDrawer, setOpenDrawer] = useState(false);
  const pagesList = ["HOME", "SOBRE NÓS", "COMO FUNCIONA", "PROGRAMAS", "FALE CONOSCO", "NOSSA HISTÓRIA"];
  const destination = ["/", "sobrenos", "comofunciona", "programas", "faleconosco", "historiadeinicio"];

  return(

    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
	<List sx={{display: "flex", flexDirection: "column"}}>
	  {
	    pagesList.map((page, index) => (<Link to={destination[index]}><ListItemButton><ListItemIcon><ListItemText>{page}</ListItemText></ListItemIcon></ListItemButton></Link>))
	  }
	</List>
      </Drawer>
      <IconButton sx={{marginLeft: "auto"}} onClick={() => setOpenDrawer(true)}>
	<MenuIcon/>
      </IconButton>
    </>
  
  );
};

export default DrawerComp;
