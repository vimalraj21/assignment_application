import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

 function Footer() {


    return(
        <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000">
        Vimal-Test
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    )
  
}
export default Footer;