import { Grid, createStyles, makeStyles, Typography, Card, CardContent, Button, Divider } from "@material-ui/core";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
// Importing actions from  cart.slice.js
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../src/store/slices/cart.slice";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyle = makeStyles(theme =>
    createStyles({
        container: {
            background: "#f2f3ff",
            margin: 0,
            padding: 0
        },
        cartGrid: {
            marginTop: theme.spacing(10)
        },
        emptyCartHeader: {
            fontSize: 32,
            fontWeight: 500
        },
        cartCard: {
            width: "70%",
            borderRadius: 10,
            margin: 10
        },
        productGrid: {
            marginTop: theme.spacing(5)
        },
        iconsGrid: {
            width: 24,
            height: 24
        },
        iconsDiv: {
            marginTop: theme.spacing(-1),
            marginLeft: theme.spacing(-10)
        },
        productHeader: {
            fontSize: 16,
            fontWeight: 600
        },
        grandTotal: {
            fontSize: 40,
            fontWeight: 600
        }
    })
);

interface cartItems {
    id: Number;
    Product: String;
}

const CartPage = () => {
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();

    const classes = useStyle();

    const getTotalPrice = () => {
        return cart.reduce((accumulator: number, item: { quantity: number; price: number }) => accumulator + item.quantity * item.price, 0);
    };

    return (
        <Grid container className={classes.cartGrid}>
            {cart.length === 0 ? (
                <Grid container justifyContent="center">
                    <Typography className={classes.emptyCartHeader}>Your Cart is Empty!</Typography>
                </Grid>
            ) : (
                <Grid container justifyContent="center">
                    {cart.map((item: any) => (
                        // eslint-disable-next-line react/jsx-key
                        <Card className={classes.cartCard}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={3} style={{ marginLeft: 20 }}>
                                        <Typography className={classes.productHeader}>Product</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography className={classes.productHeader}>Price</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography className={classes.productHeader}>Quantity</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography className={classes.productHeader}>Actions</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Typography className={classes.productHeader}>Total Price</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container className={classes.productGrid}>
                                    <Grid item xs={3} style={{ marginLeft: 20 }}>
                                        <Typography>{item.name}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        ₹ {item.price}
                                    </Grid>
                                    <Grid item xs={2} style={{ marginLeft: "20px" }}>
                                        {item.quantity}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <div className={classes.iconsDiv}>
                                            <Button onClick={() => dispatch(incrementQuantity(item.id))}>
                                                <AddCircleIcon htmlColor="green" className={classes.iconsGrid} />
                                            </Button>
                                            <Button onClick={() => dispatch(decrementQuantity(item.id))}>
                                                <IndeterminateCheckBoxIcon htmlColor="orange" className={classes.iconsGrid} />
                                            </Button>
                                            <Button onClick={() => dispatch(removeFromCart(item.id))}>
                                                <CancelIcon htmlColor="red" className={classes.iconsGrid} />
                                            </Button>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        ₹ {item.quantity * item.price}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                    <Grid container justifyContent="center">
                        <Typography className={classes.grandTotal}>Grand Total: ₹ {getTotalPrice()}</Typography>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default CartPage;
