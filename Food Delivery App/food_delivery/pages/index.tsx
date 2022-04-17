import { Box, Button, Card, CardContent, CardMedia, createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import { useRouter } from "next/router";

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
        }
    })
);

export default function Home() {
    const classes = useStyle();

    const router = useRouter();

    return (
        <Box className={classes.container}>
            <Grid container className={classes.displayBackground}>
                <img src={"/bg_4.jpg"} width={"100%"} height={"100%"} />
            </Grid>
            <Grid container className={classes.displayWelcomeTextGrid1}>
                <Typography className={classes.displayWelcomeText}>Welcome to Wheels on Meals</Typography>
            </Grid>
            <Grid container className={classes.displayWelcomeTextGrid2}>
                <Typography className={classes.displayWelcomeText}>Handmade for the food lover inside you!</Typography>
            </Grid>
            <Grid container justifyContent={"center"} className={classes.introductionGrid}>
                <Typography className={classes.introductionText}>What is so special about us?</Typography>
            </Grid>
            <Grid container justifyContent={"space-around"}>
                <Grid item>
                    <Card className={classes.productCard}>
                        <CardMedia image={"/bg_1.jpg"} className={classes.productCardMedia} />
                        <CardContent>
                            <Typography className={classes.productCardText}>All our spices are homemade, adding the midas touch to our food.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.productCard}>
                        <CardMedia image={"/delivery.jpg"} className={classes.productCardMedia} />
                        <CardContent>
                            <Typography className={classes.productCardText}>
                                We have taken the climate friendly pledge. Our delivery boys mostly use bicycles.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.productCard}>
                        <CardMedia image={"/donation.jpg"} className={classes.productCardMedia} />
                        <CardContent>
                            <Typography className={classes.productCardText}>
                                On every order above 500 Rupees, we donate 2% to the Food Relief Foundation.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"} className={classes.orderGrid}>
                <Typography className={classes.orderText}>Impressed already? Wait till you see our menu....</Typography>
            </Grid>
            <Grid container justifyContent={"center"} className={classes.menuButton}>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    endIcon={<ArrowRightAlt style={{ width: 32, height: 32 }} />}
                    onClick={() => router.push("/menu")}
                >
                    <Typography className={classes.menuButtonText}>Take me to the menu</Typography>
                </Button>
            </Grid>
        </Box>
    );
}
