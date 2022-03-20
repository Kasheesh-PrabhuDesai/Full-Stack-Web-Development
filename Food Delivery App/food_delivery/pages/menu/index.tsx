import { Grid, Box, makeStyles, createStyles } from "@material-ui/core";
import NavBar from "../../src/components/navbar";
import MenuTab from "../../src/pages/menu";

const useStyle = makeStyles(theme =>
    createStyles({
        container: {
            background: "#f2f3ff",
            margin: 0,
            padding: 0
        },
        displayBackground: {
            height: "500px",
            margin: 0,
            padding: 0
        },
        displayWelcomeTextGrid1: {
            marginTop: theme.spacing(-50),
            justifyContent: "center"
        },
        displayWelcomeTextGrid2: {
            marginTop: theme.spacing(28),
            justifyContent: "center"
        },
        displayWelcomeText: {
            fontFamily: "Lucida calligraphy",
            fontSize: 30,
            color: "#e3e3e3",
            fontWeight: 400
        },
        productCard: {
            width: 500,
            height: 800,
            backgroundColor: "#FFFFFFF",
            borderRadius: 10
        },
        introductionGrid: {
            marginTop: theme.spacing(15),
            paddingBottom: theme.spacing(5)
        },
        introductionText: {
            fontFamily: "Lucida calligraphy",
            fontSize: 50,
            fontWeight: 600,
            color: "#263dff"
        },
        productCardMedia: {
            width: 500,
            height: 700
        },
        productCardText: {
            fontFamily: "verdana",
            fontSize: 18,
            fontWeight: 400,
            color: "#263dff",
            marginLeft: 15
        },
        orderText: {
            fontFamily: "Lucida calligraphy",
            fontSize: 50,
            fontWeight: 600,
            color: "#263dff"
        },
        orderGrid: {
            padding: 50
        },
        menuButton: {
            padding: 5,
            minHeight: 70,
            borderRadius: "40px",
            "&.active": {
                background: "black"
            }
        },
        menuButtonText: {
            fontSize: 20,
            fontWeight: 300,
            fontFamily: "verdana"
        },
        menuTabGrid: {
            marginTop: theme.spacing(10)
        }
    })
);

export default function MenuPage() {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Grid container>
                <NavBar />
            </Grid>
            <Grid className={classes.menuTabGrid}>
                <MenuTab />
            </Grid>
        </Box>
    );
}
