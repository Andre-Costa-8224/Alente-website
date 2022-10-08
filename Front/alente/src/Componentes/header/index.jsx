import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import DrawerComp from "./Drawer";
import logoalente from "../../Imagens/logoalente.png"
import seio from "../../Imagens/seio.png"

import {
  AppBar, 
  Toolbar, 
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  IconButton
} from '@mui/material';

import AccountCircle from "@mui/icons-material/AccountCircle";
import useAuth from "../../hooks/useAuth";


const Cabecalho = () => {

  const signed = useAuth().signed;

  const { signout } = useAuth();
  const navigate = useNavigate();

  /**
   onClick={() => [signout(), navigate("/")]}
   */

  const pages = ["Sobre nós", "Como funciona", "Programas", "Fale conosco"];
  const destination = ["sobrenos", "comofunciona", "programas", "faleconosco"];

  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));

  //-----------

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return(    
    <>
      <AppBar position="static" sx={{background: "white", color: "black"}}>
	<Toolbar>
	  {
	    isMatch ? (
		<>
		  <Typography sx={{display: "flex", alignItems: "center", justifyContent: "center"}}><Link to={"/"}><img src={logoalente} alt="logo alente" style={{width: "30%", height: "20%"}}/><img src={seio} style={{width: "20%", height: "14%"}} alt="logo seio"/></Link></Typography>
		  <DrawerComp/>
		</>
	    ) : (
		<>
		  <Link to={'/'} style={{display: 'flex', marginTop: '2%', marginBottom: '2%'}}><img src={logoalente} alt="logo instituto alente" style={{height: "70%", minWidth: "70%"}}/><img src={seio} alt="logo seio" style={{width: "90px", height: "80px"}}/></Link>
		  <Tabs sx={{marginRight: "auto"}}>
		  {
		    pages.map((page, index) => (<Link to={destination[index]} style={{color: "#724243", fontSize: "x-large", fontWeight: "bold", textDecoration: 'none'}}><Tab label={page}/></Link>))
		  }
		  </Tabs>
		  <IconButton size="large" aria-label="account" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu}>
		    <AccountCircle/>
		  </IconButton>
      {signed > 0 ? <Menu style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: "top", horizontal: "right"}} keepMounted transformOrigin={{ vertical: "top", horizontal: "right"}} open={Boolean(anchorEl)} onClose={handleClose}>
		    <MenuItem onClick={handleClose} style={{margin: "auto", textAlign: "center", width: "90%", background: "pink"}}><Link to="/perfil" style={{textAlign: "center", color: "black", textDecoration: "none", marginBttom: "3px"}}>Perfil</Link></MenuItem>
        <MenuItem onClick={() => [signout(), navigate("/")]} style={{margin: "auto", textAlign: "center", width: "90%", background: "pink"}}><Link to="/login" style={{textAlign: "center", color: "black", textDecoration: "none", marginBttom: "3px"}}>Sair</Link></MenuItem>
		  </Menu> : <Menu style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: "top", horizontal: "right"}} keepMounted transformOrigin={{ vertical: "top", horizontal: "right"}} open={Boolean(anchorEl)} onClose={handleClose}>
		    <MenuItem onClick={handleClose} style={{margin: "auto", textAlign: "center", width: "90%", background: "pink"}}><Link to="/login" style={{textAlign: "center", color: "black", textDecoration: "none", marginBttom: "3px"}}>Login</Link></MenuItem>
		    <MenuItem onClick={handleClose} style={{textAlign: "center", width: "90%", margin: "auto", background: "pink"}}><Link to="/cadastro" style={{color: "black", textAlign: "center", textDecoration: "none"}}>Cadastre-se</Link></MenuItem>
		  </Menu>}
		  
		</>
	    )
	  }
	  </Toolbar>
      </AppBar>
    </>

)}

export default Cabecalho;
