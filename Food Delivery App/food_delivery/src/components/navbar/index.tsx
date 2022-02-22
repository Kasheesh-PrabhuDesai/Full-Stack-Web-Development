import { AppBar, Box, IconButton, Toolbar, Typography, Button, makeStyles, createStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
    createStyles({
        navBarCompanyText: {
            fontFamily: "verdana",
            fontSize: 24,
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

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color={"primary"}>
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }} className={classes.navBarCompanyText}>
                        Wheels on Meals
                    </Typography>
                    <Button color="inherit">
                        <Typography className={classes.navBarLinkText}>Home</Typography>
                    </Button>
                    <Button color="inherit">
                        <Typography className={classes.navBarLinkText}>About Us</Typography>
                    </Button>
                    <Button color="inherit">
                        <Typography className={classes.navBarLinkText}>Menu</Typography>
                    </Button>
                    <Button color="inherit">
                        <Typography className={classes.navBarLinkText}>Contact Us</Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
