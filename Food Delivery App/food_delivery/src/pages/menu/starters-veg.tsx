import { Card, makeStyles, createStyles, CardMedia, CardContent, Typography, Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cart.slice";

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

export default function StartersVegMenu() {
    const classes = useStyle();

    const dispatch = useDispatch();

    const addToCartButton = async (id: string, category: string, price: number, name: string) => {
        const product = { id: id, category: category, price: price, name: name };
        dispatch(addToCart(product));
    };

    return (
        <>
            <Grid container justifyContent={"space-around"}>
                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-veg/spring-roll.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Spring Roll</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 160</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary" onClick={() => addToCartButton("7", "soups", 100, "Potato Creamy Soup")}>
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-veg/crispy-honey-chilli-potatoes.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Crispy Honey Chilli Potatoes</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 180</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary" onClick={() => addToCartButton("1", "soups", 100, "Potato Creamy Soup")}>
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-veg/paneer-tikka.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Paneer Tikka</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 200</Typography>
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
                    <CardMedia image="starters-veg/mushroom-manchurian.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Mushroom Manchurian</Typography>
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
                    <CardMedia image="starters-veg/gobi-manchurian.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Gobi Manchurian</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 220</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary">
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="starters-veg/sweet-corn-kebab.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Sweet Corn Kebab</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 260</Typography>
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
