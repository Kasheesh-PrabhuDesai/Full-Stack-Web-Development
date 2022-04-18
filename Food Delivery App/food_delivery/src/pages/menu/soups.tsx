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

export default function SoupsMenu() {
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
                    <CardMedia image="soups/potato-soup.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Potato Creamy Soup</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 100</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary" onClick={() => addToCartButton("1", "soups", 100, "Potato Creamy Soup")}>
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="soups/mushroom-soup.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Mushroom Soup</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 150</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary" onClick={() => addToCartButton("2", "soups", 150, "Mushroom Soup")}>
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="soups/spinach-soup.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Courgette Soup</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 130</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary" onClick={() => addToCartButton("3", "soups", 130, "Courgette Soup")}>
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid container justifyContent={"space-around"} style={{ marginTop: 30 }}>
                <Card className={classes.soupsCard}>
                    <CardMedia image="soups/shrimp-soup.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Chinese Shrimp Soup</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 180</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary" onClick={() => addToCartButton("4", "soups", 180, "Chinese Shrimp Soup")}>
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="soups/croutons-soup.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Croutons Soup</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 150</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary" onClick={() => addToCartButton("5", "soups", 150, "Croutons Soup")}>
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className={classes.soupsCard}>
                    <CardMedia image="soups/raddish-soup.jpg" className={classes.soupsMedia} />
                    <CardContent>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Raddish Soup</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Typography className={classes.soupsHeaderText}>Rs. 160</Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} className={classes.textGrid}>
                            <Button variant="contained" color="primary" onClick={() => addToCartButton("6", "soups", 160, "Raddish Soup")}>
                                Add to cart
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}
