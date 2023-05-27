import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';


import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Desktop_view_live_bid({ bid_data }) {
  const [open, setOpen] = React.useState(false);
  const [bid, setBid] = React.useState({});
  const handleClickOpen = (item) => {
    console.log(item);
    setBid(item);
    setOpen(true);

  };

  const handleClose = () => {
    setBid({});
    setOpen(false);
  };
  const view_all_bids = () => {
    alert('view all bids clicked....')
  }
  const like_fun = () =>{
    alert("heart clied....");
  };
  console.log('data from component ' + JSON.stringify(bid_data))
  const user_details = () => {
    // Handle click event here
    alert('user detail')
    console.log('Typography clicked!');
  };
  return (
    <>
      <h2>Digital arts are trends now. Welcome to the world of NFTs.</h2>
      <Box sx={{ flexGrow: 1 }} margin={2} padding={2}>
        <AppBar position="static" >
          <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" color="inherit" component="div">
              {/* <CircleIcon style={{ color: 'red' }}/>  */}
              Live Bid
            </Typography>

            <Button onClick={view_all_bids} color="inherit" variant="outlined">View All Bids</Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3} padding={2}>
          {
            bid_data.length ?
              bid_data.map((item, index) => (
                <Grid item xs>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardHeader

                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      avatar={
                        <Chip icon={<WhatshotIcon />} label={item.bid_status} color={item.bid_status == 'New Bid' ? 'primary' : 'success'} />
                      }

                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={item.product_img}
                      alt="bid_image"
                    />
                    <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
                      <Typography variant="p" component="div">
                        <AddShoppingCartIcon fontSize="small" />
                        {item.available_stock !== '0' ? item.available_stock + " stock available" : "Not Available"}

                      </Typography>
                      <IconButton aria-label="add to favorites">
                        {
                          item.is_hearted ? <FavoriteIcon  style={{ color: 'red'  }} onClick={like_fun}/> : <FavoriteIcon  style={{ color: ''  }} onClick={like_fun}/>
                        }
                        
                      </IconButton>
                    </CardActions>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <Typography variant="h6" component="div">
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                              R
                            </Avatar>
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Tooltip title={item.user_name} arrow>
                            <Typography onClick={user_details} variant="subtitle1" component="h1" noWrap
                              style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer' }}>
                              {item.user_name}
                            </Typography>
                          </Tooltip>
                          <Typography onClick={user_details} variant="subtitle2" component="h2" noWrap
                            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer' }}>
                            {item.User_id}
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="subtitle2" component="h2">
                            Current Bid
                          </Typography>
                          <Typography variant="subtitle1" component="h1">
                            {item.current_bid} ETH
                          </Typography>

                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body2" component="div">
                            <Button onClick={() => handleClickOpen(item)} color="primary" variant="contained">Place Bid</Button>
                          </Typography>
                        </Grid>
                      </Grid>

                    </CardContent>

                  </Card>
                </Grid>
              ))
              : <h2>data not found...</h2>
          }

        </Grid>
      </Box>

      {/* ------------------dialog Box----------------------- */}

      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                More Details
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>

              <ListItemText primary={bid.user_name} secondary={bid.User_id} />
            </ListItem>
            <Divider />
            <Card sx>
              <CardHeader

                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                avatar={
                  <Chip icon={<WhatshotIcon />} label={bid.bid_status} color={bid.bid_status == 'New Bid' ? 'primary' : 'success'} />
                }

              />
              <CardMedia
                component="img"
                height="194"
                image={bid.product_img}
                alt="bid_image"
              />
              <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
                <Typography variant="p" component="div">
                  <AddShoppingCartIcon fontSize="small" />
                  {bid.available_stock !== '0' ? bid.available_stock + " stock available" : "Not Available"}

                </Typography>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Typography variant="h6" component="div">
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Tooltip title={bid.user_name} arrow>
                      <Typography onClick={user_details} variant="subtitle1" component="h1" style={{ cursor: 'pointer' }}>
                        {bid.user_name}
                      </Typography>
                    </Tooltip>
                    <Typography onClick={user_details} variant="subtitle2" component="h2" style={{ cursor: 'pointer' }}>
                      {bid.User_id}
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="subtitle2" component="h2">
                      Current Bid
                    </Typography>
                    <Typography variant="subtitle1" component="h1">
                      {bid.current_bid} ETH
                    </Typography>

                  </Grid>
                </Grid>

              </CardContent>

            </Card>
          </List>
        </Dialog>
      </div>
    </>
  );
}
export default Desktop_view_live_bid;
