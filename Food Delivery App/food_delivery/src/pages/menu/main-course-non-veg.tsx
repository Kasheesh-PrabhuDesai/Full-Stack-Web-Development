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

export default function MainCourseNonVegMenu() {
    const classes = useStyle();

    return (
        <>
            <Grid container justifyContent={"space-around"}>
                <Card className={classes.soupsCard}>
                    <CardMedia image="main-course-non-veg/murgh-nizami.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Murgh Nizami</Typography>
                            <Typography align="center">
                                made from pureed fresh potatoes with just a splash of milk, topped with home - made granola and sprinkled with lightly
                                toasted walnuts
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
                    <CardMedia image="main-course-non-veg/pepper-chicken.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Pepper Chicken</Typography>
                            <Typography align="center">
                                made from freshly picked mushrooms, root veggies ,sprinkled with black pepper, pink Himalayan salt and of course drizzled
                                with a yummy cream sauce
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
                    <CardMedia image="main-course-non-veg/butter-chicken.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Butter Chicken</Typography>
                            <Typography align="center">
                                made from spinach leaves, tossed in creamy cheese sauce with a sprinkle of delicious freshly made home-made herbs.Served
                                with a home baked bread
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

            <Grid container justifyContent={"space-around"} style={{ marginTop: 30 }}>
                <Card className={classes.soupsCard}>
                    <CardMedia image="main-course-non-veg/prawns-curry.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Prawns Curry</Typography>
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
                    <CardMedia image="main-course-non-veg/chicken-biryani.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Chicken Biryani</Typography>
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
                    <CardMedia image="main-course-non-veg/mutton-rogan-josh.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"}>
                            <Typography className={classes.soupsHeaderText}>Mutton Rogan Josh</Typography>
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
