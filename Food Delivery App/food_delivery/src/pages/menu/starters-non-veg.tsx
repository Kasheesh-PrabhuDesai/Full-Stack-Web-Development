import { Card, makeStyles, createStyles, CardMedia, CardContent, Typography, Grid, Button } from "@material-ui/core";

const useStyle = makeStyles(theme =>
    createStyles({
        soupsCard: {
            width: 400,
            borderRadius: 6
        },
        soupsMedia: {
            width: 400,
            height: 250
        },
        soupsHeaderText: {
            fontSize: 24,
            fontWeight: 600
        },
        textGrid: {
            padding: 10
        }
    })
);

export default function StartersNonVegMenu() {
    const classes = useStyle();

    return (
        <>
            <Grid container justifyContent={"space-around"}>
                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/amritsari-fish-fingers.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Amritsari Fish Fingers</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 210</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/prawn-dumplings.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Prawn Masala Dumplings</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 230</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/cheesy-chicken-tikka.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Cheesy Chicken Tikka</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 280</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid container justifyContent={"space-around"} style={{ marginTop: 30 }}>
                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/murgh-malai-kebab.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Murgh Malai Kebab</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 300</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/chicken-bell-pepper-skewers.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Chicken Bell Pepper Skewers</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 255</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/prawn-cutlets.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Prawn Cutlets</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 280</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}
