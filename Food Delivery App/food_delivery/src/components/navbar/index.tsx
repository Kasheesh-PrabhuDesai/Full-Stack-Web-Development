import { AppBar, Box, IconButton, Toolbar, Typography, Button, makeStyles, createStyles } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme =>
    createStyles({
        navBarCompanyText: {
            fontFamily: "verdana",
            fontSize: 26,
            fontWeight: 500
        },
        navBarLinkText: {
            fontFamily: "verdana",
            fontSize: 16,
            fontWeight: 500
        }
    })
);

export default function NavBar() {
    const classes = useStyles();

    const router = useRouter();

    const cart = useSelector((state: any) => state.cart);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color={"primary"}>
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }} className={classes.navBarCompanyText}>
                        Wheels on Meals
                    </Typography>
                    <Button color="inherit" onClick={() => router.push("/")}>
                        <Typography className={classes.navBarLinkText}>Home</Typography>
                    </Button>
                    <Button color="inherit" onClick={() => router.push("/about-us")}>
                        <Typography className={classes.navBarLinkText}>About Us</Typography>
                    </Button>
                    <Button color="inherit" onClick={() => router.push("/menu")}>
                        <Typography className={classes.navBarLinkText}>Menu</Typography>
                    </Button>
                    <Button color="inherit" onClick={() => router.push("/contact-us")}>
                        <Typography className={classes.navBarLinkText}>Contact Us</Typography>
                    </Button>
                    <Button color="inherit" onClick={() => router.push("/cart")}>
                        <ShoppingCartIcon />
                        <Typography>{cart.length}</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
