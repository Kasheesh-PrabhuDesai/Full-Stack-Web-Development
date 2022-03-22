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
        cartButton: {
            marginTop: theme.spacing(2)
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
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Amritsari Fish Fingers</Typography>
                            <Typography align="center">
                                Delicious pancake rolled into a cone, filled with the finest vegetables. Served deep fried along with our spiciest sauce on
                                the house.
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.cartButton}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/prawn-dumplings.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Prawn Masala Dumplings</Typography>
                            <Typography align="center">
                                super crispy honey chilli potatoes first batter fried and then deep fried to achieve amazing crispiness. Coated in three
                                layers to achieve extra layer of texture and to make it sweet and spicy
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.cartButton}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/cheesy-chicken-tikka.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Cheesy Chicken Tikka</Typography>
                            <Typography align="center">One of the popular North Indian starters</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.cartButton}>
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
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Murgh Malai Kebab</Typography>
                            <Typography align="center">
                                made from shrimp, fennel, chilies, oregano, basil, thyme and mushrooms, but with a very light cream filled sauce. Served
                                with garlic breadsticks
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.cartButton}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/chicken-bell-pepper-skewers.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Chicken Bell Pepper Skewers</Typography>
                            <Typography align="center">
                                Freshly fried croutons tossed in the finest handpicked herbs, mixed in a creamy white sauce seasoned with freshly crushed
                                black peppers and kosher salt
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.cartButton}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-non-veg/prawn-cutlets.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Prawn Cutlets</Typography>
                            <Typography align="center">
                                Not as scary as the name suggests. In fact one of the healthiest choices if you are on a diet. Made from raddish and a
                                finest choices of home-made herbs
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.cartButton}>
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
