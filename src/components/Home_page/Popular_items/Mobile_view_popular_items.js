import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
function Mobile_view_popular_items({ bid_data }) {
  const [age, setAge] = React.useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
          <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" color="inherit" component="div">
              {/* <CircleIcon style={{ color: 'red' }}/>  */}
              Popular items in last
            </Typography>

            <Typography variant="h6" color="inherit" component="div">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  size="small"
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="1">
                    <em>1 day</em>
                  </MenuItem>
                  <MenuItem value={10}>10 day</MenuItem>
                  <MenuItem value={20}>20 day</MenuItem>
                  <MenuItem value={30}>1 month</MenuItem>
                </Select>
              </FormControl>
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3} padding={2}>
          {
            bid_data.length ?
              bid_data.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Paper
                    sx={{
                      p: 2,
                      margin: 'auto',
                      maxWidth: 500,
                      flexGrow: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                  >
                    <Grid container spacing={2} item >
                      <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                          <Img alt="complex" src={item.product_img} />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs="auto">
        

                            <Typography gutterBottom variant="subtitle1" component="div">

                              {item.user_name}
                            </Typography>



                            <Typography variant="body2" color="text.secondary">
                              {item.User_id}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                              <Button color="primary" vvariant="outlined">{item.current_bid} ETH</Button>
                              <Button startIcon={<WhatshotIcon />} color="primary" vvariant="outlined">Place Bid</Button>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Typography variant="body2" color="text.secondary">
                              #{index+1}
                            </Typography>
                    </Grid>
                  </Paper>
                </Grid>
              ))
              : <h2>data not found...</h2>
          }

        </Grid>
      </Box>
    </>
  );
}
export default Mobile_view_popular_items;
