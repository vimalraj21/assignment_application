import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
function Desktop_view_more_info() {
    return (
        <>
            <Grid container spacing={3}  padding={2}>
                <Grid item xs>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="./4.png"
                                alt="create account"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Create your account & add wallet
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs>
                <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="./2.png"
                                alt="create account"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Get approval from our review team
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs>
                <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="./3.png"
                                alt="create account"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Create your NFT's & list them for sale
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="./1.png"
                                alt="create account"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Now sale your items & earn rewards
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </>
    )
};
export default Desktop_view_more_info;